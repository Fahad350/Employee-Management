import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../public/profile.jpg";

function ProfileAvator() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile"); // navigate to your edit profile page
  };

  return (
    <div className="m-4">
      {/* Use justify-between to space out left and right sides */}
      <div className="flex justify-between items-center">
        {/* Left side - avatar and details */}
        <div className="flex items-center gap-4">
          <img className="w-16 h-16 rounded-2xl" src={profile} alt="profile" />
          <div>
            <h1 className="text-2xl font-bold">Jhon Herry</h1>
            <p className="text-gray-800">#ac832842</p>
          </div>
        </div>

        {/* Right side - Edit Profile button */}
        <button
          onClick={handleEditProfile}
          className="bg-green-700 text-white px-4 py-2 cursor-pointer hover:scale-110 duration-300 rounded-lg hover:bg-green-800 transition"
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileAvator;
