import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="bg-[#EAF6F4] relative overflow-hidden pt-8 md:pt-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 left-0 w-32 md:w-48 h-48 md:h-64 bg-[#b5e0d8] rounded-r-full md:rounded-br-full opacity-90 -translate-x-12 md:-translate-x-4"></div>
        <div className="absolute top-20 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#b5e0d8] rounded-l-full opacity-60 translate-x-16 md:translate-x-24"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            {/* Left Content */}
            <div className="w-full md:w-[55%] lg:w-1/2 mt-8 md:mt-0 z-20 text-center md:text-left">
              <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0A1D2E] leading-[1.2] mb-4 md:mb-6 animate-fade-in-up">
                Your Health, <br className="hidden md:block" />
                Our Priority
              </h1>
              
              <p className="text-[#4B5563] text-sm sm:text-base md:text-lg mb-8 mx-auto md:mx-0 max-w-[90%] md:max-w-[450px] leading-relaxed animate-fade-in-up delay-100">
                Find and book appointments with trusted doctors at your convenience. Your health is our priority.
              </p>
              
              {/* Fixed Buttons for Mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 animate-fade-in-up delay-200">
                <Link 
                  href="/appointments" 
                  className="w-full sm:w-auto bg-[#007E63] hover:bg-[#006650] text-white px-6 py-3.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg text-center"
                >
                  Book Appointment
                </Link>
                <Link 
                  href="/appointments" 
                  className="w-full sm:w-auto text-[#007E63] hover:text-[#006650] font-semibold flex items-center justify-center gap-2 transition-colors mt-2 sm:mt-0"
                >
                  Learn More 
                  <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Content: Smaller Image */}
            <div className="w-full md:w-[45%] lg:w-1/2 flex justify-center md:justify-end items-end relative z-20 animate-fade-in-left delay-300">
              <img 
                src="/BannerPhoto.png" 
                alt="Friendly female doctor" 
                className="w-[85%] sm:w-[70%] md:w-full max-w-[280px] md:max-w-[340px] lg:max-w-[420px] object-contain drop-shadow-2xl mb-0 block"
              />
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}