import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import StatsBadge from "./StatsBadge";
import FeaturesList from "./FeaturesList";
import SocialProof from "./SocialProof";
import FloatingElements from "./FloatingElements";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-[rgb(250,245,240)] hero-background overflow-hidden">
      {/* Background decorative line */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
        viewBox="0 0 1296 939"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 0 425.181 C 0 425.181 521.548 417.409 730.121 127.25 C 510.417 611.22 480.307 667.25 480.307 667.25 C 480.307 667.25 621.905 325.433 1296 306.56" 
          stroke="rgba(255, 255, 255, 0.5)" 
          strokeWidth="80" 
          strokeLinejoin="round" 
          strokeLinecap="round" 
          fill="transparent"
        />
      </svg>

      {/* Floating decorative elements */}
      <FloatingElements />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Stats Badge */}
        <div className="flex justify-center">
          <StatsBadge />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(62,55,50)] leading-tight">
          Let an{" "}
          <span className="text-[rgb(255,73,0)]">AI Employee</span>{" "}
          build your next website
        </h1>

        {/* Features List */}
        <div className="py-4">
          <FeaturesList />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg"
            className="bg-[rgb(255,73,0)] hover:bg-[rgb(255,73,0)]/90 text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold shadow-[rgba(0,0,0,0.18)_0px_0.602187px_0.602187px_-1.25px,rgba(0,0,0,0.16)_0px_2.28853px_2.28853px_-2.5px,rgba(0,0,0,0.06)_0px_10px_10px_-3.75px,rgba(0,0,0,0.07)_0px_-0.48175px_0.1927px_-1.25px_inset,rgba(0,0,0,0.06)_0px_-1.83083px_0.732331px_-2.5px_inset,rgba(0,0,0,0.03)_0px_-8px_3.2px_-3.75px_inset,rgba(255,255,255,0.07)_0px_0.48175px_0.1927px_-1.25px_inset,rgba(255,255,255,0.06)_0px_1.83083px_0.732331px_-2.5px_inset,rgba(255,255,255,0.03)_0px_8px_3.2px_-3.75px_inset] transition-all duration-300 hover:shadow-[rgba(0,0,0,0.25)_0px_0.602187px_0.602187px_-1.25px,rgba(0,0,0,0.22)_0px_2.28853px_2.28853px_-2.5px,rgba(0,0,0,0.1)_0px_10px_10px_-3.75px] group"
          >
            <span className="flex items-center gap-2">
              Try for free now
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Social Proof */}
        <div className="pt-8">
          <SocialProof />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[rgb(62,55,50)]/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[rgb(62,55,50)]/40 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}