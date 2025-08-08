import React from 'react';
import {
  useAuthModal,
  useLogout,
  useSignerStatus,
  useUser,
} from "@account-kit/react";

export function AlchemyWalletTest() {
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const signerStatus = useSignerStatus();
  const { logout } = useLogout();

  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-4 justify-center text-center">
      {signerStatus.isInitializing ? (
        <div className="text-xl">Loading...</div>
      ) : user ? (
        <div className="flex flex-col gap-2 p-2">
          <p className="text-xl font-bold text-green-400">Success!</p>
          <p className="text-white">You're logged in as {user.email ?? "anon"}.</p>
          {user.address && (
            <p className="text-gray-400 text-sm">
              Address: {user.address.slice(0, 6)}...{user.address.slice(-4)}
            </p>
          )}
          <button
            className="akui-btn akui-btn-primary mt-6"
            onClick={() => logout()}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-xl text-white">Welcome to Climate Markets</p>
          <button 
            className="akui-btn akui-btn-primary" 
            onClick={openAuthModal}
          >
            Login with Alchemy Smart Wallets
          </button>
        </div>
      )}
    </div>
  );
}
