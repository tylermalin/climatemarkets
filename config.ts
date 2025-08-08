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
    ssr: true,
    storage: cookieStorage,
    enablePopupOauth: true,
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
        [
          {
            type: "external_wallets",
            walletConnect: { projectId: "your-project-id" },
          },
        ],
      ],
      addPasskeyOnSignup: true,
    },
  },
);

export const queryClient = new QueryClient();
