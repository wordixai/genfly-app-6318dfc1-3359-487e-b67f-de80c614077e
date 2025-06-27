import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Success checkmark bubble - top right */}
      <div className="absolute top-20 right-16 animate-[float_6s_ease-in-out_infinite] transform rotate-12">
        <div className="bg-white border border-[rgb(236,226,218)] rounded-full p-4 shadow-[rgba(0,0,0,0.18)_0px_0.602187px_2.04744px_-1.25px,rgba(0,0,0,0.16)_0px_2.28853px_7.78101px_-2.5px,rgba(0,0,0,0.06)_0px_10px_34px_-3.75px]">
          <CheckCircle2 className="w-8 h-8 text-[rgb(255,73,0)]" />
        </div>
      </div>

      {/* Website preview card - right side */}
      <div className="absolute top-32 right-8 animate-[float_8s_ease-in-out_infinite_2s] transform -rotate-8">
        <div className="bg-white border border-[rgb(236,226,218)] rounded-lg p-3 shadow-[rgba(0,0,0,0.18)_0px_0.602187px_2.04744px_-1.25px,rgba(0,0,0,0.16)_0px_2.28853px_7.78101px_-2.5px,rgba(0,0,0,0.06)_0px_10px_34px_-3.75px] max-w-[200px]">
          <div className="bg-gray-100 rounded h-24 mb-2"></div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Chat bubble - left side */}
      <div className="absolute top-48 left-16 animate-[float_7s_ease-in-out_infinite_1s] transform rotate-8">
        <div className="bg-white border border-[rgb(236,226,218)] rounded-lg p-3 shadow-[rgba(0,0,0,0.18)_0px_0.602187px_2.04744px_-1.25px,rgba(0,0,0,0.16)_0px_2.28853px_7.78101px_-2.5px,rgba(0,0,0,0.06)_0px_10px_34px_-3.75px] max-w-[150px]">
          <div className="text-xs text-[rgb(62,55,50)] leading-relaxed">
            "Amazing AI website builder!"
          </div>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span className="text-xs text-gray-500">Sarah</span>
          </div>
        </div>
      </div>

      {/* Arrow pointing to CTA */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 rotate-12 animate-[bounce_2s_infinite_4s]">
        <ArrowRight className="w-6 h-6 text-[rgb(255,73,0)]" />
      </div>
    </div>
  );
}