"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");
        router.push("/dashboard/bookings"); 
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch (err) {
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 animate-fade-in-up">
        <h1 className="text-2xl font-bold text-[#0A1D2E] text-center mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-6">Log in to manage your appointments.</p>
        
        {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none transition-all" />
          </div>
          <button type="submit" className="w-full bg-[#007E63] hover:bg-[#006650] text-white py-3 rounded-lg font-medium transition-all shadow-sm mt-2">
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account? <Link href="/register" className="text-[#007E63] font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}