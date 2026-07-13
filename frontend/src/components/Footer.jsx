import React from "react";
import { Link } from "react-router";
import { Globe, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-surface-container border-t border-border-muted mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-mobile-margin gap-8">
        {/* Brand Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="font-headline text-headline-md font-bold text-ink-black">
            Nexivo Solutions
          </div>
          <p className="text-secondary text-sm mt-2">
            © {new Date().getFullYear()} Nexivo Solutions. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 font-body text-body-md text-center">
          <a
            href="#"
            className="text-secondary hover:text-botanical-green underline underline-offset-4 transition-all duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-secondary hover:text-botanical-green underline underline-offset-4 transition-all duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-secondary hover:text-botanical-green underline underline-offset-4 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 border border-border-muted rounded-full flex items-center justify-center text-secondary hover:bg-botanical-green hover:text-surface hover:border-botanical-green transition-all duration-300 cursor-pointer"
            aria-label="Website"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 border border-border-muted rounded-full flex items-center justify-center text-secondary hover:bg-botanical-green hover:text-surface hover:border-botanical-green transition-all duration-300 cursor-pointer"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
