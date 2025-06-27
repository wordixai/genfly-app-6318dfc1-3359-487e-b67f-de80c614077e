import { Star } from "lucide-react";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
];

export default function SocialProof() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Avatars */}
      <div className="flex items-center justify-center">
        {avatars.map((avatar, index) => (
          <div 
            key={index} 
            className={`relative w-12 h-12 rounded-full border-2 border-white shadow-[rgba(0,0,0,0.18)_0px_0.602187px_2.04744px_-1.25px,rgba(0,0,0,0.16)_0px_2.28853px_7.78101px_-2.5px,rgba(0,0,0,0.06)_0px_10px_34px_-3.75px] ${index > 0 ? '-ml-3' : ''}`}
          >
            <img 
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Rating and text */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="w-4 h-4 fill-[rgb(255,73,0)] text-[rgb(255,73,0)]" />
          ))}
        </div>
        <span className="text-sm text-[rgb(62,55,50)]">
          Join 1,000+ website owners
        </span>
      </div>
    </div>
  );
}