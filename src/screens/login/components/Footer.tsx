import { Button } from "@/components/ui/button";
import ULThemeLink from "@/components/ULThemeLink";
import { rebaseLinkToCurrentOrigin } from "@/utils/helpers/urlUtils";

import { useLoginManager } from "../hooks/useLoginManager";

function Footer() {
  const { texts, signupLink, isSignupEnabled } = useLoginManager();

  // Handle text fallbacks in component
  const footerText =
    texts?.footerText || texts?.signupActionText || "Don't have an account?";
  const signupLinkText =
    texts?.footerLinkText || texts?.signupActionLinkText || "Sign up";

  const localizedSignupLink =
    signupLink && rebaseLinkToCurrentOrigin(signupLink);

  return (
    <div className="mt-4 space-y-4">
      {/* Get Appointed Section */}
      <div className="text-center space-y-3">
        <p className="text-sm text-gray-900">
          New to MGT Insurance? Get appointed & start quoting in minutes!
        </p>
        <Button 
          variant="outline" 
          className="w-full h-10 text-sm font-medium border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
          onClick={() => {
            // Handle Get Appointed button click
            console.log("Get Appointed clicked");
          }}
        >
          Get appointed
        </Button>
      </div>

      {/* Existing Signup Section */}
      {isSignupEnabled && localizedSignupLink && (
        <div className="text-sm text-left">
          <span className="text-body-text">{footerText} </span>
          <ULThemeLink href={localizedSignupLink}>{signupLinkText}</ULThemeLink>
        </div>
      )}
    </div>
  );
}

export default Footer;
