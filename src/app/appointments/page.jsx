"use client";
import { useState } from "react";
import Link from "next/link";
import doctorsData from "@/data/doctors.json";
import { Search, MapPin, Calendar, Star, ChevronDown } from "lucide-react";

export default function AppointmentsPage() {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // 1. Filter the doctors based on the search term
  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Sort the filtered doctors based on the selected dropdown option
  const sortedAndFilteredDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === "rating-high") return b.rating - a.rating; 
    if (sortBy === "reviews-high") return b.reviews - a.reviews; 
    return 0; 
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A1D2E] mb-2">
            All Appointments
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            View and manage your all doctor appointments.
          </p>
        </div>

        {/* Filters Section: Search Bar & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ transitionDelay: "100ms" }}>
          
          {/* Search Bar */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by doctor name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#007E63] focus:border-transparent bg-white shadow-sm transition-shadow"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative min-w-[160px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full pl-4 pr-10 py-3 text-base border border-gray-200 rounded-lg text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007E63] appearance-none cursor-pointer"
            >
              <option value="default">Sort By</option>
              <option value="rating-high">Rating (High to Low)</option>
              <option value="reviews-high">Most Reviewed</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Doctor List */}
        <div className="space-y-4">
          {sortedAndFilteredDoctors.length > 0 ? (
            sortedAndFilteredDoctors.map((doctor, index) => (
              <div 
                key={doctor.id} 
                className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-6 animate-fade-in-up"
                style={{ transitionDelay: `${(index % 5) * 100}ms` }}
              >
                
                {/* Left: Image & Rating */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-24 h-24 bg-[#f3f4f6] rounded-lg overflow-hidden flex items-end justify-center pt-2 mb-3">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-[85%] h-auto object-contain object-bottom"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-800">{doctor.rating}</span>
                    <span className="text-gray-500 text-xs">({doctor.reviews})</span>
                  </div>
                </div>

                {/* Middle: Doctor Details */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-lg font-bold text-[#0A1D2E]">{doctor.name}</h3>
                  <p className="text-[#007E63] font-semibold text-sm mb-3">{doctor.specialty}</p>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#007E63]" />
                      <span>{doctor.hospital}, {doctor.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-[#007E63]" />
                     
                      <span>Available: {doctor.availability[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Action Button */}
                <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                  <Link
                    href={`/doctor/${doctor.id}`}
                    className="block w-full md:w-auto bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white text-center px-8 py-2.5 rounded-md font-medium transition-all"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            ))
          ) : (
            /* Empty State if search yields no results */
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-500 text-lg">No doctors found matching "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm("")}
                className="mt-4 text-[#007E63] font-medium hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {sortedAndFilteredDoctors.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-10 animate-fade-in-up" style={{ transitionDelay: "400ms" }}>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-[#007E63] text-white font-medium text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">3</button>
            <span className="text-gray-500">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">8</button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors">&gt;</button>
          </div>
        )}

      </div>
    </div>
  );
}