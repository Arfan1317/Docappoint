import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#007E63] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          
          {/* Column 1: Branding & Socials */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/FooterLogo.png" alt="DocAppoint Logo" className="h-8 md:h-10 w-auto" />
            </Link>
            <p className="text-[#EAF6F4] text-sm leading-relaxed mb-6">
              Your health is our priority.<br />
              We are here to help you.
            </p>
            {/* Social Icons*/}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#006650] hover:bg-white hover:text-[#007E63] flex items-center justify-center transition-colors">
              
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#006650] hover:bg-white hover:text-[#007E63] flex items-center justify-center transition-colors">
               
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#006650] hover:bg-white hover:text-[#007E63] flex items-center justify-center transition-colors">
               
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#006650] hover:bg-white hover:text-[#007E63] flex items-center justify-center transition-colors">
               
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/appointments" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">All Appointments</Link></li>
              <li><Link href="/doctors" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">Doctors</Link></li>
              <li><Link href="/dashboard/bookings" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">Dashboard</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#EAF6F4] hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-[#EAF6F4] text-sm mb-4 leading-relaxed">
              Subscribe to get health tips and updates.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="w-full px-4 py-2.5 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b5e0d8] text-sm"
              />
              <button 
                type="button" 
                className="self-start px-6 py-2 border border-white rounded-md text-sm font-medium hover:bg-white hover:text-[#007E63] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="border-t border-[#006650] pt-6 flex flex-col md:flex-row justify-center items-center text-center">
          <p className="text-[#EAF6F4] text-sm">
            © {new Date().getFullYear()} DocAppoint. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}