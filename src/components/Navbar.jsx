"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false; // TEMP for BetterAuth

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Appointments", path: "/appointments" },
    { name: "Dashboard", path: "/dashboard/bookings" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/NavbarLogo.png" alt="DocAppoint Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className="text-gray-700 hover:text-[#007E63] font-medium transition-colors">
                {link.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <img src="https://i.ibb.co/user.jpg" alt="Profile" className="h-10 w-10 rounded-full border-2 border-[#007E63] object-cover" />
                <button className="text-gray-700 hover:text-red-600 font-medium transition-colors">Logout</button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/login" className="text-gray-700 hover:text-[#007E63] font-medium transition-colors">Login</Link>
                <Link href="/register" className="bg-[#007E63] hover:bg-[#006650] text-white px-6 py-2 rounded-md font-medium transition-colors">Register</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#007E63] focus:outline-none">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 pb-2 z-50">
          <div className="px-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#007E63] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <div className="mt-4 pt-4 border-t border-gray-100 px-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <img src="https://i.ibb.co/user.jpg" alt="Profile" className="h-10 w-10 rounded-full border-2 border-[#007E63] object-cover" />
                  <span className="font-medium text-gray-700">My Profile</span>
                </div>
                <button className="text-red-600 font-medium">Logout</button>
              </div>
            ) : (
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2 px-3 pb-2">
                <Link href="/login" className="block text-center px-4 py-3 rounded-md font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Login
                </Link>
                <Link href="/register" className="block text-center px-4 py-3 rounded-md font-medium bg-[#007E63] text-white hover:bg-[#006650]">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}