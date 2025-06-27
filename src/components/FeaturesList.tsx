import { Check } from "lucide-react";

const features = [
  "No experience needed",
  "Fully designed by AI", 
  "Professional look"
];

export default function FeaturesList() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-6 px-4 py-3 overflow-hidden">
        <div className="flex items-center gap-6 animate-[scroll_15s_linear_infinite]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap">
              <Check className="w-4 h-4 text-[rgb(255,73,0)]" />
              <span className="text-sm text-[rgb(62,55,50)] font-medium">
                {feature}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {features.map((feature, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-2 whitespace-nowrap">
              <Check className="w-4 h-4 text-[rgb(255,73,0)]" />
              <span className="text-sm text-[rgb(62,55,50)] font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}