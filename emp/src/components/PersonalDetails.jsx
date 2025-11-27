import React from "react";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import profile from "../../public/profile.jpg";
import { PiAddressBook } from "react-icons/pi";
import { GiModernCity } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSubtitles } from "react-icons/md";

function PersonalDetails() {
  return (
    <>
      <div className="">
        <div className="flex gap-4.5">
          <div>
            <img className="size-15 rounded-2xl" src={profile} alt="profile" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Jhon Herry</h1>
            <p className="text-gray-800">#ac832842</p>
          </div>
        </div>
        <br />
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold">About</h3>
        </div>

        <div className="flex gap-3 mt-4 text-sm">
          <div>
            <CiPhone className="size-4 " />
          </div>
          <div className="text-gray-600">Phone:</div>
          <div className="font-semibold">+10273672832</div>
        </div>
        <div className="flex gap-3 text-sm mt-2">
          <div>
            <MdOutlineMailOutline className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">Email:</div>
          <div className="font-semibold">herry@gmail.com</div>
        </div>
        <br />
        <hr className="text-gray-400" />
        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mt-2">Adress</h3>
        </div>

        <div className="flex gap-3 mt-4 text-sm">
          <div>
            <PiAddressBook className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">Address:</div>
          <div className="font-semibold">390 market sreet</div>
        </div>
        <div className="flex gap-3 mt-2">
          <div>
            <GiModernCity className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">City State:</div>
          <div className="font-semibold">san fransisco, ca</div>
        </div>
        <div className="flex gap-3 mt-2">
          <div>
            <CiLocationOn className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">Postal Code:</div>
          <div className="font-semibold">987845</div>
        </div>
        <br />
        <hr className="text-gray-400" />
        {/* Employee details */}
        <div>
          <h3 className="text-xl font-semibold mt-2">Employee Details</h3>
        </div>

        <div className="flex gap-3 mt-4 text-sm">
          <div>
            <CiCalendarDate className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">Date of birth:</div>
          <div className="font-semibold">sep 03 1999</div>
        </div>
        <div className="flex gap-3 mt-2">
          <div>
            <CgProfile className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">National Id:</div>
          <div className="font-semibold">ger392y2972</div>
        </div>
        <div className="flex gap-3 mt-2">
          <div>
            <MdOutlineSubtitles className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">Title:</div>
          <div className="font-semibold">project manager</div>
        </div>
        <div className="flex gap-3 mt-2">
          <div>
            <CiLocationOn className="size-4 mt-1" />
          </div>
          <div className="text-gray-600">Hire Date:</div>
          <div className="font-semibold">Jan 05 2022</div>
        </div>
        <br />
        <hr className="text-gray-400" />
      </div>
    </>
  );
}

export default PersonalDetails;
