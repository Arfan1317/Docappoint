"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function BookingModal({ doctorId, doctorName }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    patientName: "",
    gender: "Male",
    phone: "",
    appointmentDate: "",
    appointmentTime: "10:30 AM",
    note: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const appointmentData = {
      doctorId,
      doctorName,
      ...formData,
      status: "Upcoming"
    };

    console.log("Sending to Backend:", appointmentData);
    
    try {
      // Sending data to your new Express backend!
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData)
      });
      
      if(res.ok) {
        alert("Appointment booked successfully in MongoDB!");
        setIsOpen(false);
        // Reset form to defaults
        setFormData({
          patientName: "", gender: "Male", phone: "", 
          appointmentDate: "", appointmentTime: "10:30 AM", note: ""
        });
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Failed to connect to backend:", error);
      alert("Server error. Is your backend running?");
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full md:w-auto bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white px-8 py-3.5 rounded-lg font-medium transition-all whitespace-nowrap"
      >
        Book Appointment
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-xl flex flex-col relative">
            
            <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-[#0A1D2E]">Book Appointment</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-700 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Patient Name</label>
                <input type="text" name="patientName" placeholder="Rubin Uddin" value={formData.patientName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 bg-white appearance-none">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number</label>
                <input type="tel" name="phone" placeholder="01712345678" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Appointment Date</label>
                <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Appointment Time</label>
                <select name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 bg-white appearance-none">
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Note (Optional)</label>
                <textarea name="note" placeholder="Add any note for the doctor..." value={formData.note} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 resize-none transition-all"></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-md border border-[#007E63] text-[#007E63] font-medium hover:bg-green-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2.5 rounded-md bg-[#007E63] hover:bg-[#006650] text-white font-medium transition-colors shadow-sm">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}