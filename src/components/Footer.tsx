import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[rgb(236,226,218)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[rgb(255,73,0)] rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-[rgb(62,55,50)]">
                mysite.ai
              </span>
            </div>
            <p className="text-sm text-[rgb(62,55,50)]/70 max-w-xs">
              The AI-powered website builder that creates professional websites in minutes.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(62,55,50)] mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(62,55,50)] mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-[rgb(62,55,50)] mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-[rgb(236,226,218)] flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-[rgb(62,55,50)]/70">
            © 2024 mysite.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-[rgb(62,55,50)]/70 hover:text-[rgb(255,73,0)] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}