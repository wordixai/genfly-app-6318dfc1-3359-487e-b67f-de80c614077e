import { Bot } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-[rgb(236,226,218)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[rgb(255,73,0)] rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-[rgb(62,55,50)]">
              mysite.ai
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="text-[rgb(62,55,50)] hover:text-[rgb(255,73,0)] transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a 
              href="#" 
              className="text-[rgb(62,55,50)] hover:text-[rgb(255,73,0)] transition-colors text-sm font-medium"
            >
              Examples
            </a>
            <a 
              href="#" 
              className="text-[rgb(62,55,50)] hover:text-[rgb(255,73,0)] transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="text-[rgb(62,55,50)] hover:text-[rgb(255,73,0)] transition-colors text-sm font-medium"
            >
              Help
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-[rgb(62,55,50)] hover:text-[rgb(255,73,0)] transition-colors text-sm font-medium"
            >
              Log in
            </a>
            <Button 
              className="bg-[rgb(255,73,0)] hover:bg-[rgb(255,73,0)]/90 text-white border-0 rounded-lg px-4 py-2 text-sm font-medium shadow-[rgba(0,0,0,0.18)_0px_0.602187px_0.602187px_-1.25px,rgba(0,0,0,0.16)_0px_2.28853px_2.28853px_-2.5px,rgba(0,0,0,0.06)_0px_10px_10px_-3.75px]"
            >
              Try for free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}