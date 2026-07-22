"use client";

export default function HeroCloudArt() {
  return (
    <div className="relative w-full max-w-md mx-auto [perspective:1000px]">
      {/* Add profile picture */}
      <img 
        src="C:/Users/DCI-Student/Desktop/IMG_7591.png" 
        alt="Profile Picture" 
        className="absolute top-10 left-10 w-20 h-20 rounded-full border border-[#FF9900] shadow-lg" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/20 to-[#0078D4]/20 blur-3xl rounded-full" />
      <svg viewBox="0 0 400 300" className="relative w-full drop-shadow-2xl [transform:rotateX(8deg)_rotateY(-8deg)] transition-transform duration-500 hover:[transform:rotateX(0deg)_rotateY(0deg)]">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF9900" /><stop offset="100%" stopColor="#0078D4" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="150" r="60" fill="url(#g1)" opacity="0.15" />
        <rect x="120" y="110" width="160" height="80" rx="16" fill="white" stroke="url(#g1)" strokeWidth="2" className="dark:fill-slate-800" />
        <circle cx="160" cy="140" r="10" fill="#FF9900" className="animate-pulse" />
        <circle cx="200" cy="140" r="10" fill="#0078D4" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
        <circle cx="240" cy="140" r="10" fill="#FF9900" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <path d="M160 170 H240" stroke="url(#g1)" strokeWidth="2" />
        <path d="M120 150 H80 M280 150 H320" stroke="url(#g1)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
      </svg>
      <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#FF9900] rounded-full animate-bounce shadow-lg" />
      <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-[#0078D4] rounded-full animate-bounce shadow-lg" style={{ animationDelay: "0.7s" }} />
    </div>
  );
}