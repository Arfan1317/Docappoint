"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
 
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Register Card Container */}
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 animate-fade-in-up">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A1D2E] mb-2">Register</h1>
          <p className="text-gray-500 text-sm">Create your account to get started.</p>
        </div>

        {/* Register Form */}
        <form className="space-y-5">
          
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Rubin Uddin"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007E63] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="user@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007E63] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="https://i.ibb.co/vaerj2g"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007E63] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              required
            />
          </div>

          {/* Password Field with Toggle */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007E63] focus:border-transparent transition-all text-gray-900 tracking-widest placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-[#007E63] transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {/* Password Hint */}
            <p className="mt-2 text-sm text-[#007E63] leading-relaxed">
              Password must contain at least 1 uppercase, 1 lowercase & be 8+ characters.
            </p>
          </div>

          {/* Solid Register Button */}
          <button
            type="submit"
            className="w-full bg-[#007E63] hover:bg-[#006650] active:scale-[0.98] text-white py-3.5 rounded-lg font-medium transition-all shadow-sm mt-4"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="mt-8 mb-6 relative flex items-center justify-center">
          <div className="border-t border-gray-200 w-full absolute"></div>
          <span className="bg-white px-4 text-sm text-gray-500 relative">
            or continue with
          </span>
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 active:scale-[0.98] text-[#0A1D2E] font-semibold py-3.5 rounded-lg transition-all shadow-sm"
        >
          {/* Native SVG for Google Logo */}
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link 
            href="/login" 
            className="text-[#007E63] font-bold hover:text-[#006650] hover:underline transition-colors"
          >
            Login
          </Link>
        </p>
        
      </div>
    </div>
  );
}