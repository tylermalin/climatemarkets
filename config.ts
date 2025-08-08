import { createConfig, cookieStorage } from "@account-kit/react";
import { QueryClient } from "@tanstack/react-query";
import { base, alchemy } from "@account-kit/infra";

export const config = createConfig(
  {
    transport: alchemy({
      // Replace with your API key from Alchemy Dashboard
      apiKey: "alcht_ibGcrP7Kpnqt4DOccBtkHwZxCLQbYH",
    }),
    chain: base,
    ssr: false, // Disable SSR to avoid API issues
    storage: cookieStorage,
    enablePopupOauth: false, // Disable OAuth to avoid API issues
    // For gas sponsorship (optional)
    // Learn more here: https://www.alchemy.com/docs/wallets/react/sponsor-gas
    // policyId: "YOUR_POLICY_ID",
  },
  {
    auth: {
      sections: [
        [{ type: "email" }],
        [
          { type: "passkey" },
          { type: "social", authProviderId: "google", mode: "popup" },
        ],
        // External wallets disabled until proper project ID is configured
        // [
        //   {
        //     type: "external_wallets",
        //     walletConnect: { projectId: "YOUR_WALLETCONNECT_PROJECT_ID" },
        //   },
        // ],
      ],
      addPasskeyOnSignup: true,
    },
  },
);

export const queryClient = new QueryClient();
