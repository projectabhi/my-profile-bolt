import { Zap } from "lucide-react";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Zap className="w-6 h-6 text-yellow-400" />
          <span className="text-lg font-semibold">Built with passion</span>
        </div>
        <p className="text-gray-400">
          © 2025 Abhijit Dey. All rights reserved. Crafted with React & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
});
export default Footer;
