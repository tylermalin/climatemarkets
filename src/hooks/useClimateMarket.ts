import { useState, useEffect, useCallback } from 'react';
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi';
import { parseEther, formatEther } from 'viem';

// ABI for the ClimateMarket contract
const CLIMATE_MARKET_ABI = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isYes",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "buyShares",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      }
    ],
    "name": "getMarket",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalVolume",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "resolved",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "outcome",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "yesShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "noShares",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "yesPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "noPrice",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "oracle",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "resolutionCriteria",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "sustainabilityFee",
            "type": "uint256"
          }
        ],
        "internalType": "struct ClimateMarket.Market",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserShares",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "yesShares",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "noShares",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "marketId",
        "type": "uint256"
      }
    ],
    "name": "redeemShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

// Contract address (you'll need to deploy this)
const CLIMATE_MARKET_ADDRESS = '0x1234567890123456789012345678901234567890' as const;

export interface MarketData {
  id: bigint;
  title: string;
  description: string;
  endTime: bigint;
  totalVolume: bigint;
  resolved: boolean;
  outcome: boolean;
  yesShares: bigint;
  noShares: bigint;
  yesPrice: bigint;
  noPrice: bigint;
  oracle: `0x${string}`;
  resolutionCriteria: string;
  sustainabilityFee: bigint;
}

export interface UserShares {
  yesShares: bigint;
  noShares: bigint;
}

export function useClimateMarket() {
  const { address, isConnected } = useAccount();
  const [selectedMarketId, setSelectedMarketId] = useState<number | null>(null);
  const [tradeAmount, setTradeAmount] = useState<string>('');
  const [isYes, setIsYes] = useState<boolean>(true);

  // Read market data
  const { data: marketData, refetch: refetchMarket } = useContractRead({
    address: CLIMATE_MARKET_ADDRESS,
    abi: CLIMATE_MARKET_ABI,
    functionName: 'getMarket',
    args: selectedMarketId ? [BigInt(selectedMarketId)] : undefined,
    enabled: !!selectedMarketId,
  });

  // Read user shares
  const { data: userShares, refetch: refetchUserShares } = useContractRead({
    address: CLIMATE_MARKET_ADDRESS,
    abi: CLIMATE_MARKET_ABI,
    functionName: 'getUserShares',
    args: selectedMarketId && address ? [BigInt(selectedMarketId), address] : undefined,
    enabled: !!selectedMarketId && !!address,
  });

  // Buy shares transaction
  const { 
    data: buySharesData, 
    write: buyShares, 
    isLoading: isBuyingShares,
    error: buySharesError 
  } = useContractWrite({
    address: CLIMATE_MARKET_ADDRESS,
    abi: CLIMATE_MARKET_ABI,
    functionName: 'buyShares',
  });

  // Wait for buy shares transaction
  const { isLoading: isBuyingSharesPending, isSuccess: isBuyingSharesSuccess } = useWaitForTransaction({
    hash: buySharesData?.hash,
  });

  // Redeem shares transaction
  const { 
    data: redeemSharesData, 
    write: redeemShares, 
    isLoading: isRedeemingShares,
    error: redeemSharesError 
  } = useContractWrite({
    address: CLIMATE_MARKET_ADDRESS,
    abi: CLIMATE_MARKET_ABI,
    functionName: 'redeemShares',
  });

  // Wait for redeem shares transaction
  const { isLoading: isRedeemingSharesPending, isSuccess: isRedeemingSharesSuccess } = useWaitForTransaction({
    hash: redeemSharesData?.hash,
  });

  // Execute buy shares
  const executeBuyShares = useCallback(() => {
    if (!selectedMarketId || !tradeAmount || !buyShares) return;

    try {
      const amount = parseEther(tradeAmount);
      buyShares({
        args: [BigInt(selectedMarketId), isYes, amount],
        value: amount,
      });
    } catch (error) {
      console.error('Error buying shares:', error);
    }
  }, [selectedMarketId, tradeAmount, isYes, buyShares]);

  // Execute redeem shares
  const executeRedeemShares = useCallback(() => {
    if (!selectedMarketId || !redeemShares) return;

    try {
      redeemShares({
        args: [BigInt(selectedMarketId)],
      });
    } catch (error) {
      console.error('Error redeeming shares:', error);
    }
  }, [selectedMarketId, redeemShares]);

  // Calculate prices
  const calculatePrices = useCallback((market: MarketData | undefined) => {
    if (!market) return { yesPrice: 0, noPrice: 0 };

    const yesPricePercent = Number(market.yesPrice) / Number(market.yesPrice + market.noPrice) * 100;
    const noPricePercent = 100 - yesPricePercent;

    return {
      yesPrice: yesPricePercent,
      noPrice: noPricePercent,
    };
  }, []);

  // Calculate user position
  const calculateUserPosition = useCallback((shares: UserShares | undefined) => {
    if (!shares) return { yesShares: 0, noShares: 0, totalValue: 0 };

    const yesShares = Number(formatEther(shares.yesShares));
    const noShares = Number(formatEther(shares.noShares));
    const totalValue = yesShares + noShares;

    return { yesShares, noShares, totalValue };
  }, []);

  // Refetch data after successful transactions
  useEffect(() => {
    if (isBuyingSharesSuccess) {
      refetchMarket();
      refetchUserShares();
      setTradeAmount('');
    }
  }, [isBuyingSharesSuccess, refetchMarket, refetchUserShares]);

  useEffect(() => {
    if (isRedeemingSharesSuccess) {
      refetchMarket();
      refetchUserShares();
    }
  }, [isRedeemingSharesSuccess, refetchMarket, refetchUserShares]);

  return {
    // State
    selectedMarketId,
    setSelectedMarketId,
    tradeAmount,
    setTradeAmount,
    isYes,
    setIsYes,
    
    // Data
    marketData: marketData as MarketData | undefined,
    userShares: userShares as UserShares | undefined,
    
    // Actions
    executeBuyShares,
    executeRedeemShares,
    
    // Loading states
    isBuyingShares: isBuyingShares || isBuyingSharesPending,
    isRedeemingShares: isRedeemingShares || isRedeemingSharesPending,
    
    // Success states
    isBuyingSharesSuccess,
    isRedeemingSharesSuccess,
    
    // Errors
    buySharesError,
    redeemSharesError,
    
    // Utilities
    calculatePrices,
    calculateUserPosition,
    
    // Connection
    isConnected,
    address,
  };
}
