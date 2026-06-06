import Link from "next/link";
import { Star, MapPin } from "lucide-react";

export default function DoctorCard({ doctor }) {
  return (
    
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 active:scale-[0.98] active:shadow-md transition-all duration-300 group cursor-pointer">
      
      <div className="bg-[#f3f4f6] rounded-xl overflow-hidden aspect-[4/3] mb-5 flex items-end justify-center pt-4 relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-[80%] h-auto object-contain object-bottom group-hover:scale-110 transition-transform duration-500"
        />
        {/* Subtle overlay effect on mobile tap */}
        <div className="absolute inset-0 bg-black opacity-0 group-active:opacity-5 transition-opacity"></div>
      </div>

      <div className="space-y-2.5 px-2">
        <h3 className="text-xl font-bold text-[#0A1D2E]">{doctor.name}</h3>
        <p className="text-[#007E63] font-semibold">{doctor.specialty}</p>

        <div className="flex items-center gap-1.5 text-sm mt-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-gray-800">{doctor.rating}</span>
          <span className="text-gray-500">({doctor.reviews})</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 pb-3">
          <MapPin className="w-4 h-4 text-[#007E63]" />
          <span>{doctor.hospital}</span>
        </div>

        <Link
          href={`/doctor/${doctor.id}`}
          className="block w-full bg-[#007E63] hover:bg-[#006650] active:bg-[#005240] text-white text-center py-2.5 rounded-lg font-medium transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}