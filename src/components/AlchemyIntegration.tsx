import React from 'react';
import {
  useAuthModal,
  useLogout,
  useSignerStatus,
  useUser,
} from "@account-kit/react";

interface AlchemyIntegrationProps {
  onUserChange?: (user: any) => void;
}

export function AlchemyIntegration({ onUserChange }: AlchemyIntegrationProps) {
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const signerStatus = useSignerStatus();
  const { logout } = useLogout();

  // Notify parent component when user changes
  React.useEffect(() => {
    if (onUserChange) {
      onUserChange(user);
    }
  }, [user, onUserChange]);

  if (signerStatus.isInitializing) {
    return <div className="text-gray-400">Loading Alchemy...</div>;
  }

  if (!user) {
    return (
      <button
        onClick={openAuthModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Connect with Alchemy
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="text-right">
        <div className="text-sm text-white font-medium">
          {user.email || 'User'}
        </div>
        <div className="text-xs text-gray-400">
          {user.address ? 
            `${user.address.slice(0, 6)}...${user.address.slice(-4)}` :
            'Connected'
          }
        </div>
      </div>
      <button
        onClick={() => logout()}
        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
