import ULThemeCard from "@/components/ULThemeCard";
import ULThemePageLayout from "@/components/ULThemePageLayout";
import ULThemeSeparator from "@/components/ULThemeSeparator";
import { SocialConnection } from "@/utils/helpers/socialUtils";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { useLoginManager } from "./hooks/useLoginManager";

function LoginScreen() {
  // Extracting attributes from hook made out of LoginInstance class of Auth0 JS SDK
  const { loginInstance, texts } = useLoginManager();

  // Other Texts
  document.title = texts?.pageTitle || "Login";

  // Apply theme from SDK instance when screen loads
  applyAuth0Theme(loginInstance);

  return (
    // Mountain background with light blue gradient
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Mountain background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mountain peaks */}
        <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1200 200" fill="none">
          {/* Far mountains */}
          <path d="M0 200 L200 120 L400 140 L600 100 L800 130 L1000 110 L1200 140 L1200 200 Z" fill="rgba(255,255,255,0.3)" />
          {/* Middle mountains */}
          <path d="M0 200 L150 80 L300 100 L450 60 L600 90 L750 70 L900 100 L1050 80 L1200 100 L1200 200 Z" fill="rgba(255,255,255,0.5)" />
          {/* Close mountains */}
          <path d="M0 200 L100 60 L200 80 L300 40 L400 70 L500 50 L600 80 L700 60 L800 90 L900 70 L1000 100 L1100 80 L1200 100 L1200 200 Z" fill="rgba(255,255,255,0.7)" />
        </svg>
        
        {/* Animal silhouette on mountain */}
        <div className="absolute bottom-16 left-1/4 w-6 h-4">
          <svg viewBox="0 0 24 16" fill="#374151">
            <path d="M2 12 L6 8 L10 10 L14 8 L18 10 L22 12 L22 14 L2 14 Z" />
            <circle cx="8" cy="6" r="1" />
            <path d="M4 4 L6 2 L8 4" stroke="#374151" strokeWidth="1" fill="none" />
          </svg>
        </div>
        
        {/* Aurora effect */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-green-200/20 via-blue-200/20 to-purple-200/20"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <ULThemeCard className="w-full max-w-[500px] gap-0 p-8 shadow-xl bg-white/95 backdrop-blur-sm">
          <Header />
          <LoginForm />
          <Footer />
        </ULThemeCard>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
        © 2025 MGT Insurance All Rights Reserved. Terms & Conditions About MGT
      </div>

      {/* Chat icon */}
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
    </div>
  );
}

export default LoginScreen;
