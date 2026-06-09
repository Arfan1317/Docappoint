"use client";
import { useEffect } from "react";
import Link from "next/link";
import doctorsData from "@/data/doctors.json";
import DoctorCard from "@/components/DoctorCard";
// Added the 4 icons needed for the "Why Choose" section
import { UserCheck, CalendarCheck, ShieldCheck, Headset } from "lucide-react"; 

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.15 }); 

    const hiddenElements = document.querySelectorAll(".scroll-reveal");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      
      {/* 1. HERO BANNER (Your exact code) */}
      <section className="bg-[#EAF6F4] relative overflow-hidden pt-8 md:pt-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-32 md:w-48 h-48 md:h-64 bg-[#b5e0d8] rounded-r-full md:rounded-br-full opacity-90 -translate-x-12 md:-translate-x-4"></div>
        <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#b5e0d8] rounded-l-full opacity-60 translate-x-16 md:translate-x-24"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            <div className="w-full md:w-[55%] lg:w-1/2 mt-6 md:mt-0 z-20 text-center md:text-left scroll-reveal">
              <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0A1D2E] leading-[1.2] mb-4 md:mb-6">
                Your Health, <br className="hidden md:block" />
                Our Priority
              </h1>
              
              <p className="text-[#4B5563] text-sm sm:text-base md:text-lg mb-6 mx-auto md:mx-0 max-w-[90%] md:max-w-[450px] leading-relaxed">
                Find and book appointments with trusted doctors at your convenience. Your health is our priority.
              </p>
              
              <div className="flex flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                <Link href="/appointments" className="w-auto bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-lg text-sm sm:text-base font-medium transition-all shadow-md text-center whitespace-nowrap">
                  Book Appointment
                </Link>
                <Link href="/appointments" className="group w-auto text-[#007E63] hover:text-[#006650] active:opacity-70 text-sm sm:text-base font-semibold flex items-center justify-center gap-1.5 transition-all">
                  Learn More 
                  <span className="text-lg sm:text-xl leading-none transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-1/2 flex justify-center md:justify-end items-end relative z-20 scroll-reveal" style={{ transitionDelay: "200ms" }}>
              <img src="/BannerPhoto.png" alt="Friendly female doctor" className="w-[85%] sm:w-[70%] md:w-full max-w-[280px] md:max-w-[340px] lg:max-w-[420px] object-contain drop-shadow-2xl mb-0 block" />
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. TOP DOCTORS (Your exact code) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1D2E] mb-3">
            Top-Rated Doctors
          </h2>
          <div className="h-1 w-12 bg-[#007E63] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.slice(0, 3).map((doctor, index) => (
            <div key={doctor.id} className="scroll-reveal" style={{ transitionDelay: `${index * 150}ms` }}>
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEW: WHY CHOOSE DOCAPPOINT? */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1D2E] mb-3">
            Why Choose DocAppoint?
          </h2>
          <div className="h-1 w-12 bg-[#007E63] mx-auto rounded-full"></div>
        </div>

        {/* Grid: 1 col on mobile, 2 cols on tablet, 4 cols on laptop. Also adds the subtle vertical dividers from the design on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:divide-x divide-gray-200">
          
          <div className="scroll-reveal flex flex-col items-center px-4">
            <div className="w-16 h-16 bg-[#EAF6F4] rounded-full flex items-center justify-center mb-4 text-[#007E63]">
              <UserCheck size={30} />
            </div>
            <h3 className="text-lg font-bold text-[#0A1D2E] mb-2">Verified Doctors</h3>
            <p className="text-gray-500 text-sm">Consult with highly qualified and experienced doctors.</p>
          </div>

          <div className="scroll-reveal flex flex-col items-center px-4" style={{ transitionDelay: "100ms" }}>
            <div className="w-16 h-16 bg-[#EAF6F4] rounded-full flex items-center justify-center mb-4 text-[#007E63]">
              <CalendarCheck size={30} />
            </div>
            <h3 className="text-lg font-bold text-[#0A1D2E] mb-2">Fast Booking</h3>
            <p className="text-gray-500 text-sm">Book appointments in just a few clicks.</p>
          </div>

          <div className="scroll-reveal flex flex-col items-center px-4" style={{ transitionDelay: "200ms" }}>
            <div className="w-16 h-16 bg-[#EAF6F4] rounded-full flex items-center justify-center mb-4 text-[#007E63]">
              <ShieldCheck size={30} />
            </div>
            <h3 className="text-lg font-bold text-[#0A1D2E] mb-2">Secure & Safe</h3>
            <p className="text-gray-500 text-sm">Your data is protected and 100% secure.</p>
          </div>

          <div className="scroll-reveal flex flex-col items-center px-4" style={{ transitionDelay: "300ms" }}>
            <div className="w-16 h-16 bg-[#EAF6F4] rounded-full flex items-center justify-center mb-4 text-[#007E63]">
              <Headset size={30} />
            </div>
            <h3 className="text-lg font-bold text-[#0A1D2E] mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm">We are here to help you anytime.</p>
          </div>

        </div>
      </section>

      {/* 4. NEW: CALL TO ACTION BANNER */}
      <section className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        {/* Background color block with rounded corners */}
        <div className="bg-[#EAF6F4] rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-10 md:pt-0 overflow-hidden scroll-reveal">
          
          {/* Left Side: Text and Button */}
          <div className="w-full md:w-[55%] py-8 md:py-16 text-center md:text-left z-10">
            <h2 className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-[#0A1D2E] mb-4 md:mb-5 leading-tight">
              Your Health is in Good Hands
            </h2>
            <p className="text-gray-600 mb-8 max-w-[400px] mx-auto md:mx-0 text-sm md:text-base">
              Book an appointment today and get the best care from our specialists.
            </p>
            <Link 
              href="/appointments" 
              className="inline-block bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Right Side: The Book.png Image */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-end items-end h-full mt-6 md:mt-10">
            <img 
              src="/Book.png" 
              alt="Team of professional doctors" 
              className="w-[90%] md:w-[120%] lg:max-w-[450px] object-contain object-bottom block transform md:translate-y-2" 
            />
          </div>

        </div>
      </section>
      
    </main>
  );
}