import { Activity } from "lucide-react";

export default function LoadingSpinner() {
  return (
   
    <div className="min-h-[60vh] flex flex-col items-center justify-center w-full bg-[#f8fafc]">
      
      <div className="relative flex items-center justify-center">
      
        <div className="w-16 h-16 border-4 border-[#EAF6F4] border-t-[#007E63] rounded-full animate-spin"></div>
        
        
        <div className="absolute text-[#007E63] animate-pulse">
          <Activity size={24} strokeWidth={2.5} />
        </div>
      </div>
      
      
      <p className="mt-5 text-[#0A1D2E] font-semibold text-sm animate-pulse tracking-wide">
        Fetching data...
      </p>
      
    </div>
  );
}