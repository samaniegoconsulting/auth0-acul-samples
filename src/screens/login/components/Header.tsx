import ULThemeSubtitle from "@/components/ULThemeSubtitle";
import ULThemeTitle from "@/components/ULThemeTitle";

import { useLoginManager } from "../hooks/useLoginManager";

function Header() {
  const { texts } = useLoginManager();

  return (
    <>
      {/* MGT Logo */}
      <div className="flex items-center mb-6">
        <div className="flex items-center space-x-2">
          {/* Mountain icon */}
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 4 L24 16 L20 20 L16 16 L12 20 L8 16 L16 4 Z" />
            <path d="M8 20 L16 12 L24 20 L20 24 L16 20 L12 24 L8 20 Z" />
          </svg>
          {/* MGT text */}
          <span className="text-2xl font-bold text-gray-900">MGT</span>
        </div>
      </div>
      
      <ULThemeTitle className="text-xl font-bold text-gray-900 mb-1">
        Quote & bind commercial insurance in minutes.
      </ULThemeTitle>
      <ULThemeSubtitle className="text-base font-semibold text-gray-900 mb-4">
        Sign in to Broker Portal
      </ULThemeSubtitle>
    </>
  );
}

export default Header;
