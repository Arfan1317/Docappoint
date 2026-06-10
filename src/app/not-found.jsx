import Link from "next/link";
import { MapPinOff, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
  
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#f8fafc] px-4 py-16 overflow-hidden">
      
      {/* Content Container */}
      <div className="text-center z-10 animate-fade-in-up">
        
        <h1 className="text-[5.5rem] md:text-[8rem] lg:text-[10rem] font-bold text-[#0A1D2E] leading-none mb-2 tracking-tight">
          404
        </h1>
        
       
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1D2E] mb-4">
          Page Not Found
        </h2>
        
       
        <p className="text-gray-500 text-sm md:text-base mb-8 max-w-sm mx-auto">
          Sorry, the page you are looking for doesn't exist.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-block bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-md mb-16"
        >
          Go to Home
        </Link>
      </div>

      
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center animate-fade-in-up" style={{ transitionDelay: "150ms" }}>
        
        {/* Animated Background Circles */}
        <div className="absolute inset-0 bg-[#EAF6F4] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute inset-8 bg-[#b5e0d8] rounded-full opacity-40"></div>
        
        
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="absolute -ml-16 -mt-16 transform hover:-translate-y-2 transition-transform duration-300">
            <MapPinOff size={64} className="text-[#007E63]" strokeWidth={1.5} />
          </div>
          <div className="absolute ml-20 mt-16 transform hover:-translate-y-2 transition-transform duration-300 animate-bounce" style={{ animationDuration: '3s' }}>
            <HelpCircle size={48} className="text-[#0A1D2E]" strokeWidth={1.5} />
          </div>
        </div>

      </div>

    </div>
  );
}