import { Bot } from "lucide-react";

export default function StatsBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-[rgb(236,226,218)] rounded-full shadow-sm">
      <div className="w-6 h-6 bg-[rgb(255,73,0)] rounded-lg flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm text-[rgb(62,55,50)] font-medium">
        4,500+ websites created
      </span>
    </div>
  );
}