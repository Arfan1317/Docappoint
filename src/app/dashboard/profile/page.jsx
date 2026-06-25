"use client";
import { useState, useEffect } from "react";
import { Bell, X, CheckCircle, User } from "lucide-react";

export default function MyProfilePage() {
  // --- EMPTY USER STATE ---
  // Ready to receive real data from your backend. 
  // We keep the email because typically a user logs in with their email, so it's known immediately.
  const [user, setUser] = useState({
    name: "",
    email: "user@gmail.com", 
    photoUrl: "" 
  });

  // --- STATE MANAGEMENT ---
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: ""
  });
  const [toastMessage, setToastMessage] = useState("");

  // --- FUTURE MONGODB FETCH ---
  /*
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch('/api/user/profile');
      const data = await res.json();
      setUser(data);
      setFormData({ name: data.name || "", photoUrl: data.photoUrl || "" });
    };
    fetchUserData();
  }, []);
  */

  // --- HANDLERS ---
  const handleUpdateClick = () => {
    setFormData({ name: user.name, photoUrl: user.photoUrl });
    setIsUpdating(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveUpdate = async (e) => {
    e.preventDefault();
    
    setUser({ ...user, name: formData.name, photoUrl: formData.photoUrl });
    setIsUpdating(false);
    showToast("Profile updated successfully!");

    // FUTURE BACKEND LOGIC TO UPDATE MONGODB
    /*
    await fetch('/api/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: formData.name, photoUrl: formData.photoUrl })
    });
    */
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000); 
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#0A1D2E]">My Profile</h1>
            <p className="text-gray-500 text-sm">Manage your profile information.</p>
          </div>
          <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <Bell size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          
          {/* --- LEFT SIDE: PROFILE CARD --- */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center w-full md:w-[400px] shrink-0 animate-fade-in-up">
            
            {/* Conditional Avatar Display */}
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md mb-5 flex items-center justify-center">
              {user.photoUrl ? (
                <img 
                  src={user.photoUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }} // Hides broken image links
                />
              ) : (
                <User size={60} className="text-gray-300" strokeWidth={1.5} />
              )}
            </div>
            
            {/* Conditional Name Display */}
            <h2 className="text-2xl font-bold text-[#0A1D2E] mb-1">
              {user.name ? user.name : "Setup Your Profile"}
            </h2>
            <p className="text-gray-500 mb-6">{user.email}</p>
            
            {/* Action Button */}
            {!isUpdating && (
              <button 
                onClick={handleUpdateClick}
                className="w-full bg-[#007E63] hover:bg-[#006650] active:scale-95 text-white py-3 rounded-lg font-medium transition-all shadow-sm"
              >
                {user.name ? "Update Profile" : "Complete Profile"}
              </button>
            )}
          </div>

          {/* --- RIGHT SIDE: UPDATE PANEL/MODAL --- */}
          {isUpdating && (
            <div className="fixed inset-0 md:static md:inset-auto z-50 flex justify-center items-center bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-4 md:p-0 w-full animate-fade-in-up md:animate-none">
              <div className="bg-white rounded-2xl w-full max-w-md md:max-w-full border border-gray-100 shadow-xl md:shadow-sm">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-[#0A1D2E]">
                    {user.name ? "Update Profile" : "Complete Your Profile"}
                  </h2>
                  <button 
                    onClick={() => setIsUpdating(false)} 
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSaveUpdate} className="p-6 space-y-5">
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="e.g. Rubin Uddin"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Photo URL (Optional)</label>
                    <input 
                      type="url" 
                      name="photoUrl"
                      placeholder="https://example.com/your-photo.jpg"
                      value={formData.photoUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007E63] outline-none text-gray-900 transition-all"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      type="button" 
                      onClick={() => setIsUpdating(false)}
                      className="flex-1 py-2.5 border border-[#007E63] text-[#007E63] font-medium rounded-lg hover:bg-green-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="flex-1 py-2.5 bg-[#007E63] text-white font-medium rounded-lg hover:bg-[#006650] transition-colors shadow-sm"
                    >
                      Save Changes
                    </button>
                  </div>

                </form>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* --- TOAST NOTIFICATION --- */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#EAF6F4] border border-[#007E63] text-[#007E63] px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-up z-50 w-[90%] max-w-sm">
          <CheckCircle size={20} className="text-[#007E63] shrink-0" />
          <span className="font-semibold text-sm">{toastMessage}</span>
          <button onClick={() => setToastMessage("")} className="ml-auto text-[#007E63] hover:text-[#006650]">
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}