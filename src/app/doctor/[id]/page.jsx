import { redirect } from "next/navigation";
import Link from "next/link";
import doctorsData from "@/data/doctors.json";
import { 
  ArrowLeft, Star, GraduationCap, HeartPulse, 
  Briefcase, Languages, MapPin, Calendar, Clock, CalendarDays 
} from "lucide-react";

export default async function DoctorDetailsPage({ params }) {
  // 1. AUTHENTICATION LOGIC
  // TEMP: Set this to 'true' while you are designing so you can see the page!
  // Set it to 'false' to test the redirect to the login page.
  const isLoggedIn = false; 

  if (!isLoggedIn) {
    redirect("/login");
  }

  // 2. FETCH DOCTOR DATA
  const { id } = await params;
  const doctor = doctorsData.find((doc) => doc.id === id);

  // If someone types a random ID in the URL, show a fallback or 404
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800">Doctor not found</h1>
      </div>
    );
  }

  // 3. MOCK EXTENDED DATA
  // Since our JSON doesn't have all these specific details yet, we use generic fallbacks to match the design perfectly.
  const specializations = ["Heart Diseases", "Preventive Cardiology", "Hypertension", "Arrhythmia", "Echocardiography"];
  
  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link 
          href="/appointments" 
          className="inline-flex items-center gap-2 text-[#007E63] font-semibold hover:text-[#006650] hover:underline mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Doctors
        </Link>

        {/* --- 1. PROFILE HEADER CARD --- */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 mb-8 animate-fade-in-up">
          
          {/* Doctor Image */}
          <div className="shrink-0 flex justify-center md:justify-start">
            <div className="w-48 h-48 md:w-56 md:h-56 bg-[#f3f4f6] rounded-full overflow-hidden flex items-end justify-center pt-4 border-4 border-white shadow-md">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-[85%] h-auto object-contain object-bottom"
              />
            </div>
          </div>

          {/* Doctor Quick Info */}
          <div className="flex-grow flex flex-col justify-center space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-[#0A1D2E] mb-1">{doctor.name}</h1>
              <p className="text-[#007E63] text-lg font-medium">{doctor.specialty}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-lg text-gray-900">{doctor.rating}</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span className="text-gray-500">({doctor.reviews} reviews)</span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <GraduationCap className="text-[#007E63]" size={20} />
                <span>MBBS, MD ({doctor.specialty})</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <HeartPulse className="text-[#007E63]" size={20} />
                <span>{doctor.specialty}, Specialist</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <Briefcase className="text-[#007E63]" size={20} />
                <span>Experience: {doctor.experience}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 text-sm md:text-base">
                <Languages className="text-[#007E63]" size={20} />
                <span>English, Bengali</span>
              </div>
              <div className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                <MapPin className="text-[#007E63] shrink-0 mt-0.5" size={20} />
                <span>{doctor.hospital}<br />{doctor.location}, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- 2. DETAILED INFORMATION SECTIONS --- */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm space-y-10 animate-fade-in-up" style={{ transitionDelay: "100ms" }}>
          
          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-[#007E63] mb-4">About Doctor</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {doctor.description} Dedicated to providing personalized care and helping patients achieve better health outcomes.
            </p>
          </div>

          {/* Specializations (Pills) */}
          <div>
            <h2 className="text-xl font-bold text-[#007E63] mb-4">Specializations</h2>
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec, index) => (
                <span key={index} className="bg-[#f3f4f6] text-[#0A1D2E] px-4 py-2 rounded-md text-sm font-medium">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#007E63] mb-4">Education</h2>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc list-inside">
                <li>MBBS - Dhaka Medical College</li>
                <li>MD ({doctor.specialty}) - BSMMU</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#007E63] mb-4">Experience</h2>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc list-inside">
                <li>{doctor.experience} of Experience</li>
                <li>Worked at {doctor.hospital}</li>
              </ul>
            </div>
          </div>

          {/* Availability */}
          <div>
            <h2 className="text-xl font-bold text-[#007E63] mb-4">Availability</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 bg-[#EAF6F4] text-[#0A1D2E] px-4 py-2.5 rounded-md text-sm font-medium">
                <Calendar size={18} className="text-[#007E63]" />
                Monday - Saturday
              </div>
              <div className="flex items-center gap-2 bg-[#EAF6F4] text-[#0A1D2E] px-4 py-2.5 rounded-md text-sm font-medium">
                <Clock size={18} className="text-[#007E63]" />
                {doctor.availability[0]}
              </div>
            </div>
          </div>

          {/* --- 3. PATIENT REVIEWS --- */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#007E63] mb-2">Patient Reviews</h2>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-[#0A1D2E]">{doctor.rating}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                  </div>
                </div>
                <span className="text-gray-500 text-sm">({doctor.reviews} reviews)</span>
              </div>
              
              <button className="bg-[#007E63] hover:bg-[#006650] text-white px-6 py-2.5 rounded-md font-medium transition-colors text-sm">
                Write a Review
              </button>
            </div>

            {/* Review List */}
            <div className="space-y-6">
              {/* Mock Review 1 */}
              <div className="border-b border-gray-50 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <img src="/RaselAhmed.jpeg" alt="Rasel Ahmed" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#0A1D2E] text-sm">Rasel Ahmed</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">2 weeks ago</span>
                </div>
                <p className="text-gray-600 text-sm">Excellent doctor! Very professional and caring. Highly recommend to everyone.</p>
              </div>

              {/* Mock Review 2 */}
              <div className="border-b border-gray-50 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <img src="/SadiaIslam.jpeg" alt="Sadia Islam" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#0A1D2E] text-sm">Sadia Islam</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs">1 month ago</span>
                </div>
                <p className="text-gray-600 text-sm">Very good experience. She listens carefully and explains everything.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. BOTTOM CALL TO ACTION --- */}
        <div className="mt-8 bg-[#EAF6F4] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up" style={{ transitionDelay: "200ms" }}>
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#007E63] shrink-0">
              <CalendarDays size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A1D2E]">Have a health issue to discuss?</h3>
              <p className="text-gray-600 text-sm mt-1">Book an appointment and get expert advice.</p>
            </div>
          </div>
          
          <button className="w-full md:w-auto bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white px-8 py-3.5 rounded-lg font-medium transition-all whitespace-nowrap">
            Book an Appointment
          </button>
        </div>

      </div>
    </div>
  );
}