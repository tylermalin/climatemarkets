// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ClimateMarket is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;

    // Market structure
    struct Market {
        uint256 id;
        string title;
        string description;
        uint256 endTime;
        uint256 totalVolume;
        bool resolved;
        bool outcome;
        uint256 yesShares;
        uint256 noShares;
        uint256 yesPrice;
        uint256 noPrice;
        address oracle;
        string resolutionCriteria;
        uint256 sustainabilityFee;
    }

    // Trade structure
    struct Trade {
        uint256 id;
        uint256 marketId;
        address trader;
        bool isYes;
        uint256 amount;
        uint256 shares;
        uint256 timestamp;
    }

    // Events
    event MarketCreated(uint256 indexed marketId, string title, uint256 endTime);
    event TradeExecuted(uint256 indexed marketId, address indexed trader, bool isYes, uint256 amount, uint256 shares);
    event MarketResolved(uint256 indexed marketId, bool outcome);
    event SharesRedeemed(uint256 indexed marketId, address indexed trader, uint256 amount);

    // State variables
    Counters.Counter private _marketIds;
    Counters.Counter private _tradeIds;
    
    mapping(uint256 => Market) public markets;
    mapping(uint256 => Trade[]) public marketTrades;
    mapping(uint256 => mapping(address => uint256)) public userYesShares;
    mapping(uint256 => mapping(address => uint256)) public userNoShares;
    
    uint256 public constant PRICE_PRECISION = 1e18;
    uint256 public constant MIN_TRADE_AMOUNT = 0.01 ether;
    uint256 public constant MAX_TRADE_AMOUNT = 1000 ether;
    uint256 public constant SUSTAINABILITY_FEE_RATE = 250; // 2.5% in basis points

    constructor() {
        _marketIds.increment(); // Start from 1
    }

    // Create a new market
    function createMarket(
        string memory title,
        string memory description,
        uint256 endTime,
        string memory resolutionCriteria,
        address oracle
    ) external onlyOwner returns (uint256) {
        require(endTime > block.timestamp, "End time must be in the future");
        require(oracle != address(0), "Invalid oracle address");

        uint256 marketId = _marketIds.current();
        _marketIds.increment();

        markets[marketId] = Market({
            id: marketId,
            title: title,
            description: description,
            endTime: endTime,
            totalVolume: 0,
            resolved: false,
            outcome: false,
            yesShares: 0,
            noShares: 0,
            yesPrice: PRICE_PRECISION / 2, // Start at 50%
            noPrice: PRICE_PRECISION / 2,
            oracle: oracle,
            resolutionCriteria: resolutionCriteria,
            sustainabilityFee: SUSTAINABILITY_FEE_RATE
        });

        emit MarketCreated(marketId, title, endTime);
        return marketId;
    }

    // Buy shares (Yes or No)
    function buyShares(
        uint256 marketId,
        bool isYes,
        uint256 amount
    ) external payable nonReentrant {
        require(msg.value == amount, "Incorrect payment amount");
        require(amount >= MIN_TRADE_AMOUNT, "Amount too small");
        require(amount <= MAX_TRADE_AMOUNT, "Amount too large");
        
        Market storage market = markets[marketId];
        require(market.id != 0, "Market does not exist");
        require(!market.resolved, "Market already resolved");
        require(block.timestamp < market.endTime, "Market ended");

        uint256 shares;
        uint256 fee = (amount * market.sustainabilityFee) / 10000;
        uint256 tradeAmount = amount - fee;

        if (isYes) {
            shares = (tradeAmount * PRICE_PRECISION) / market.yesPrice;
            market.yesShares += shares;
            userYesShares[marketId][msg.sender] += shares;
            
            // Update price based on demand
            market.yesPrice = calculateNewPrice(market.yesShares, market.noShares, true);
            market.noPrice = PRICE_PRECISION - market.yesPrice;
        } else {
            shares = (tradeAmount * PRICE_PRECISION) / market.noPrice;
            market.noShares += shares;
            userNoShares[marketId][msg.sender] += shares;
            
            // Update price based on demand
            market.noPrice = calculateNewPrice(market.yesShares, market.noShares, false);
            market.yesPrice = PRICE_PRECISION - market.noPrice;
        }

        market.totalVolume += amount;

        // Record trade
        uint256 tradeId = _tradeIds.current();
        _tradeIds.increment();
        
        marketTrades[marketId].push(Trade({
            id: tradeId,
            marketId: marketId,
            trader: msg.sender,
            isYes: isYes,
            amount: amount,
            shares: shares,
            timestamp: block.timestamp
        }));

        emit TradeExecuted(marketId, msg.sender, isYes, amount, shares);
    }

    // Calculate new price based on shares
    function calculateNewPrice(
        uint256 yesShares,
        uint256 noShares,
        bool isYes
    ) internal pure returns (uint256) {
        uint256 totalShares = yesShares + noShares;
        if (totalShares == 0) return PRICE_PRECISION / 2;

        if (isYes) {
            return (yesShares * PRICE_PRECISION) / totalShares;
        } else {
            return (noShares * PRICE_PRECISION) / totalShares;
        }
    }

    // Resolve market (only oracle can call)
    function resolveMarket(uint256 marketId, bool outcome) external {
        Market storage market = markets[marketId];
        require(msg.sender == market.oracle, "Only oracle can resolve");
        require(!market.resolved, "Market already resolved");
        require(block.timestamp >= market.endTime, "Market not ended yet");

        market.resolved = true;
        market.outcome = outcome;

        emit MarketResolved(marketId, outcome);
    }

    // Redeem shares after resolution
    function redeemShares(uint256 marketId) external nonReentrant {
        Market storage market = markets[marketId];
        require(market.resolved, "Market not resolved");

        uint256 yesShares = userYesShares[marketId][msg.sender];
        uint256 noShares = userNoShares[marketId][msg.sender];
        
        require(yesShares > 0 || noShares > 0, "No shares to redeem");

        uint256 payout = 0;

        if (market.outcome) {
            // Yes outcome - pay out yes shares
            if (yesShares > 0) {
                payout = yesShares;
                userYesShares[marketId][msg.sender] = 0;
            }
        } else {
            // No outcome - pay out no shares
            if (noShares > 0) {
                payout = noShares;
                userNoShares[marketId][msg.sender] = 0;
            }
        }

        require(payout > 0, "No winning shares");
        
        // Transfer payout
        (bool success, ) = payable(msg.sender).call{value: payout}("");
        require(success, "Transfer failed");

        emit SharesRedeemed(marketId, msg.sender, payout);
    }

    // Get market information
    function getMarket(uint256 marketId) external view returns (Market memory) {
        return markets[marketId];
    }

    // Get user shares for a market
    function getUserShares(uint256 marketId, address user) external view returns (uint256 yesShares, uint256 noShares) {
        return (userYesShares[marketId][user], userNoShares[marketId][user]);
    }

    // Get market trades
    function getMarketTrades(uint256 marketId) external view returns (Trade[] memory) {
        return marketTrades[marketId];
    }

    // Withdraw sustainability fees (owner only)
    function withdrawFees() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No fees to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Transfer failed");
    }

    // Emergency pause (owner only)
    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    // Receive function
    receive() external payable {}
}
