"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bell, X, CheckCircle, CalendarX2 } from "lucide-react";

export default function MyBookingsPage() {
  // START WITH NO INITIAL BOOKINGS
  const [bookings, setBookings] = useState([]);
  
  const [selectedBooking, setSelectedBooking] = useState(null); 
  const [toastMessage, setToastMessage] = useState(""); 

  // --- FUTURE MONGODB FETCH ---
  // When we build the backend, this will automatically run when the page loads
  // and fill the 'bookings' array with the user's real data.
  /*
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('/api/user/bookings');
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      }
    };
    fetchBookings();
  }, []);
  */

  // --- HANDLERS ---
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to cancel this appointment?");
    if (!confirmDelete) return;

    setBookings(bookings.filter(booking => booking.id !== id));
    showToast("Appointment deleted successfully!");

    // FUTURE BACKEND LOGIC
    /*
    await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
    */
  };

  const handleUpdateClick = (booking) => {
    setSelectedBooking({ ...booking });
  };

  const handleUpdateChange = (e) => {
    setSelectedBooking({ ...selectedBooking, [e.target.name]: e.target.value });
  };

  const handleSaveUpdate = async (e) => {
    e.preventDefault();
    setBookings(bookings.map(b => b.id === selectedBooking.id ? selectedBooking : b));
    setSelectedBooking(null);
    showToast("Appointment updated successfully!");

    // FUTURE BACKEND LOGIC
    /*
    await fetch(`/api/appointments/${selectedBooking.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedBooking)
    });
    */
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000); 
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 relative">
        
      
        <div className="flex-grow">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-[#0A1D2E]">My Bookings</h1>
              <p className="text-gray-500 text-sm">Manage your all appointments.</p>
            </div>
            <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
              <Bell size={20} className="text-gray-600" />
            </button>
          </div>

         
          {bookings.length === 0 ? (
            
           
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-[#EAF6F4] rounded-full flex items-center justify-center mb-5 text-[#007E63]">
                <CalendarX2 size={32} />
              </div>
              <h2 className="text-xl font-bold text-[#0A1D2E] mb-2">No Appointments Found</h2>
              <p className="text-gray-500 text-sm mb-8 max-w-sm">
                You don't have any upcoming appointments scheduled at the moment.
              </p>
              <Link 
                href="/appointments"
                className="bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-sm"
              >
                Book an Appointment
              </Link>
            </div>

          ) : (

            
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 animate-fade-in-up">
                  
                  {/* Doctor Info */}
                  <div className="flex items-center gap-4 w-full md:w-1/3">
                    <img src={booking.image} alt={booking.doctorName} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 bg-[#f3f4f6]" />
                    <div>
                      <h3 className="font-bold text-[#0A1D2E] text-base">{booking.doctorName}</h3>
                      <p className="text-gray-500 text-sm">{booking.specialty}</p>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="flex flex-col sm:flex-row w-full md:w-1/3 justify-between gap-4">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Date</p>
                      <p className="font-semibold text-[#0A1D2E] text-sm">{booking.date}</p>
                      <p className="text-gray-400 text-xs mt-3 mb-1">Patient</p>
                      <p className="font-semibold text-[#0A1D2E] text-sm">{booking.patientName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Time</p>
                      <p className="font-semibold text-[#0A1D2E] text-sm">{booking.time}</p>
                      <p className="text-gray-400 text-xs mt-3 mb-1">Phone</p>
                      <p className="font-semibold text-[#0A1D2E] text-sm">{booking.phone}</p>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-1/3 gap-3">
                    <span className={`px-4 py-1.5 rounded-md text-xs font-bold ${
                      booking.status === 'Confirmed' ? 'bg-[#EAF6F4] text-[#007E63]' : 'bg-yellow-50 text-yellow-600'
                    }`}>
                      {booking.status}
                    </span>
                    
                    <div className="flex gap-2 mt-0 md:mt-4">
                      <button 
                        onClick={() => handleUpdateClick(booking)}
                        className="px-4 py-1.5 border border-[#007E63] text-[#007E63] text-sm font-medium rounded hover:bg-[#EAF6F4] transition-colors"
                      >
                        Update
                      </button>
                      <button 
                        onClick={() => handleDelete(booking.id)}
                        className="px-4 py-1.5 border border-red-500 text-red-500 text-sm font-medium rounded hover:bg-red-50 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Component */}
          {bookings.length > 0 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <span className="text-gray-400">&lt;</span>
              <button className="w-8 h-8 rounded bg-[#007E63] text-white font-medium flex items-center justify-center">1</button>
              <span className="text-gray-400">&gt;</span>
            </div>
          )}
        </div>

        
        {selectedBooking && (
          <div className="fixed inset-0 lg:static lg:inset-auto z-50 flex justify-center items-center bg-black/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0">
            <div className="bg-white rounded-2xl w-full max-w-md border border-gray-100 shadow-xl lg:shadow-sm flex flex-col max-h-[90vh] overflow-y-auto animate-fade-in-up lg:animate-none">
              
              <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                <h2 className="text-xl font-bold text-[#0A1D2E]">Update Appointment</h2>
                <button onClick={() => setSelectedBooking(null)} className="text-gray-400 hover:text-gray-700">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSaveUpdate} className="p-6 space-y-4">
                {/* READ ONLY FIELDS */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Doctor Name</label>
                  <input type="text" value={selectedBooking.doctorName} disabled className="w-full px-3 py-2.5 rounded border border-gray-200 bg-gray-50 text-gray-500 text-sm cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Email</label>
                  <input type="email" value={selectedBooking.email} disabled className="w-full px-3 py-2.5 rounded border border-gray-200 bg-gray-50 text-gray-500 text-sm cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number</label>
                  <input type="text" value={selectedBooking.phone} disabled className="w-full px-3 py-2.5 rounded border border-gray-200 bg-gray-50 text-gray-500 text-sm cursor-not-allowed" />
                </div>

                {/* EDITABLE FIELDS */}
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Patient Name</label>
                  <input type="text" name="patientName" value={selectedBooking.patientName} onChange={handleUpdateChange} required className="w-full px-3 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 text-sm" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Gender</label>
                  <select name="gender" value={selectedBooking.gender} onChange={handleUpdateChange} className="w-full px-3 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 bg-white text-sm">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Appointment Date</label>
                  <input type="date" name="date" value={selectedBooking.date} onChange={handleUpdateChange} required className="w-full px-3 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-900 mb-1">Appointment Time</label>
                  <select name="time" value={selectedBooking.time} onChange={handleUpdateChange} className="w-full px-3 py-2.5 rounded border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 bg-white text-sm">
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setSelectedBooking(null)} className="flex-1 py-2.5 border border-gray-200 text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors text-sm">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 py-2.5 bg-[#007E63] text-white font-medium rounded hover:bg-[#006650] transition-colors text-sm">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>

      {/* --- TOAST NOTIFICATION --- */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#EAF6F4] border border-[#007E63] text-[#007E63] px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-up z-50">
          <CheckCircle size={20} className="text-[#007E63]" />
          <span className="font-semibold text-sm">{toastMessage}</span>
          <button onClick={() => setToastMessage("")} className="ml-4 text-[#007E63] hover:text-[#006650]">
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}