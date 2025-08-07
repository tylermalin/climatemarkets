import React, { useState } from 'react';
import { X, Mail, ExternalLink } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (method: string, data?: any) => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate Google login
    setTimeout(() => {
      onLogin('google');
      setIsLoading(false);
    }, 1000);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate email login
    setTimeout(() => {
      onLogin('email', { email });
      setIsLoading(false);
    }, 1000);
  };

  const handleWalletLogin = (walletType: string) => {
    setIsLoading(true);
    // Simulate wallet connection
    setTimeout(() => {
      onLogin('wallet', { walletType });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12C0 5.37258 5.37258 0 12 0H36C42.6274 0 48 5.37258 48 12V36C48 42.6274 42.6274 48 36 48H12C5.37258 48 0 42.6274 0 36V12Z" fill="#0060FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M34.6148 9.94128V38.0587L11.8853 31.2882V16.7118L34.6148 9.94128ZM13.8921 18.8288V29.1712L30.2773 24L13.8921 18.8288ZM32.6079 25.3689L16.3106 30.5124L32.6079 35.3669V25.3689ZM32.6079 22.6311L16.3106 17.4876L32.6079 12.6331V22.6311Z" fill="white"/>
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Welcome to Climate Markets
          </h2>
          <p className="text-gray-400 text-sm">
            Connect your wallet or sign in to start trading
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full bg-white text-gray-900 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4 flex items-center justify-center space-x-3"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 488 512" className="w-5 h-5">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Email Login */}
        <form onSubmit={handleEmailLogin} className="mb-6">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors mb-4"
            required
          />
          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Connecting...' : 'Continue'}
          </button>
        </form>

        {/* Wallet Options */}
        <div className="space-y-3">
          <button
            onClick={() => handleWalletLogin('metamask')}
            disabled={isLoading}
            className="w-full bg-gray-800 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z" fill="#E2761B" stroke="#E2761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z" fill="#E4761B" stroke="#E4761B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z" fill="#D7C1B3" stroke="#D7C1B3" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z" fill="#D7C1B3" stroke="#D7C1B3" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z" fill="#233447" stroke="#233447" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z" fill="#233447" stroke="#233447" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z" fill="#CD6116" stroke="#CD6116" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z" fill="#E4751F" stroke="#E4751F" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z" fill="#C0AD9E" stroke="#C0AD9E" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z" fill="#161616" stroke="#161616" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z" fill="#763D16" stroke="#763D16" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z" fill="#763D16" stroke="#763D16" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z" fill="#F6851B" stroke="#F6851B" strokeWidth="0.269931" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>MetaMask</span>
          </button>

          <button
            onClick={() => handleWalletLogin('walletconnect')}
            disabled={isLoading}
            className="w-full bg-gray-800 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#0052FF"/>
              <rect rx="27%" width="20" height="20" fill="#0052FF"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z" fill="white"/>
            </svg>
            <span>WalletConnect</span>
          </button>

          <button
            onClick={() => handleWalletLogin('phantom')}
            disabled={isLoading}
            className="w-full bg-gray-800 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
          >
            <svg width="32" height="32" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ background: 'rgb(171, 159, 242)', borderRadius: '27.5%' }}>
              <path fillRule="evenodd" clipRule="evenodd" d="M37.7425 57.0705C34.1942 62.3362 28.2483 69 20.3366 69C16.5965 69 13.0001 67.5093 13 61.0322C12.9997 44.5362 36.2555 19.0003 57.8334 19C70.1084 18.9998 75 27.2474 75 36.6136C75 48.6357 66.9442 62.3824 58.9368 62.3824C56.3955 62.3824 55.1487 61.031 55.1487 58.888C55.1487 58.3288 55.2442 57.7228 55.4365 57.0705C52.7029 61.5902 47.4285 65.7849 42.4896 65.7849C38.8933 65.7849 37.0713 63.5944 37.0713 60.5187C37.0713 59.4003 37.311 58.2357 37.7425 57.0705ZM53.7586 31.6834C51.8054 31.6868 50.4738 33.2938 50.478 35.5864C50.4822 37.879 51.8198 39.5273 53.7729 39.5241C55.6789 39.5208 57.0099 37.8679 57.0058 35.5752C57.0016 33.2827 55.6646 31.6802 53.7586 31.6834ZM64.1193 31.6725C62.1661 31.6759 60.8345 33.2829 60.8387 35.5755C60.8429 37.868 62.1798 39.5164 64.1336 39.5131C66.0396 39.5099 67.3706 37.8569 67.3664 35.5643C67.3622 33.2718 66.0253 31.6693 64.1193 31.6725Z" fill="#ffffff"/>
            </svg>
            <span>Phantom</span>
          </button>

          <a
            href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-800 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-3"
          >
            <svg width="42" height="42" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', top: '-5px', left: '-5px' }}>
              <path d="M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z" fill="#3B99FC"/>
            </svg>
            <span>Install Phantom</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <a href="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Terms
            </a>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
