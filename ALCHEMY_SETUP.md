# Alchemy Smart Wallets Integration Setup

## Overview
This project has been integrated with Alchemy Smart Wallets to provide seamless wallet authentication using BASE chain.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install @account-kit/infra @account-kit/react @tanstack/react-query
```

### 2. Get Your Alchemy API Key
1. Create an app in the [Alchemy Dashboard](https://dashboard.alchemy.com/)
2. Enable BASE network under the Networks tab
3. Create a new configuration in your Smart Wallets Dashboard
4. Apply the config to your app
5. Enable authentication methods (email, social login, etc.)
6. Copy your API key from the dashboard

### 3. Update Configuration
Edit `config.ts` and replace `YOUR_API_KEY` with your actual Alchemy API key:

```typescript
transport: alchemy({
  apiKey: "YOUR_ACTUAL_API_KEY_HERE",
}),
```

### 4. Optional: Gas Sponsorship
To enable gasless transactions, uncomment and configure the policyId:

```typescript
policyId: "YOUR_POLICY_ID",
```

### 5. Test the Integration
The app now includes:
- ✅ Alchemy Smart Wallets integration with BASE chain
- ✅ Email authentication
- ✅ Passkey support
- ✅ Google OAuth
- ✅ External wallet connections (MetaMask, etc.)
- ✅ Modern UI components with AccountKit styling

## Features Implemented

### Authentication Methods
- **Email**: Traditional email/password authentication
- **Passkey**: Modern passwordless authentication
- **Google OAuth**: Social login with Google
- **External Wallets**: Connect existing wallets (MetaMask, WalletConnect)

### Chain Support
- **BASE**: Primary chain for transactions
- **Smart Wallets**: Embedded wallet functionality
- **Gas Sponsorship**: Optional gasless transactions

### UI Components
- **AccountKit UI**: Modern, accessible components
- **Tailwind Integration**: Customizable styling
- **Responsive Design**: Works on all devices

## Usage

### Basic Authentication
```typescript
import { useAuthModal, useUser, useLogout } from "@account-kit/react";

function MyComponent() {
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const { logout } = useLogout();

  if (!user) {
    return <button onClick={openAuthModal}>Login</button>;
  }

  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Transaction Support
```typescript
import { useSendUserOperation } from "@account-kit/react";

function SendTransaction() {
  const { sendUserOperation } = useSendUserOperation();

  const handleSend = async () => {
    const result = await sendUserOperation({
      target: "0x...",
      data: "0x...",
      value: "0x0",
    });
  };
}
```

## Next Steps

1. **Get API Key**: Obtain your Alchemy API key from the dashboard
2. **Test Authentication**: Try different login methods
3. **Customize UI**: Modify the AccountKit theme in `tailwind.config.js`
4. **Add Transactions**: Implement user operations for trading
5. **Gas Sponsorship**: Set up gasless transactions if needed

## Troubleshooting

### Common Issues
- **Import Errors**: Make sure all dependencies are installed
- **API Key Issues**: Verify your Alchemy API key is correct
- **Network Issues**: Ensure BASE network is enabled in your Alchemy app
- **UI Styling**: Check that Tailwind config is properly wrapped with `withAccountKitUi`

### Support
- [Alchemy Documentation](https://www.alchemy.com/docs/wallets/react)
- [AccountKit UI Components](https://www.alchemy.com/docs/wallets/react/ui-components)
- [Smart Wallets Dashboard](https://dashboard.alchemy.com/smart-wallets)
