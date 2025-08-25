"use client";
import { useState } from "react";
import { User, LogOut, Settings } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await axios.get("/api/log-out");
    window.location.href = "/";
  };
  const handleMyAccount = () => {
    router.push("/my-account");
  };

  return (
    <div className={"relative inline-block text-left"}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <User className="w-5 h-5 text-gray-600" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {/* My Account Option */}
            <button
              onClick={handleMyAccount}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            >
              <Settings className="w-4 h-4 mr-3 text-gray-500" />
              My Account
            </button>
            <hr />

            {/* Logout Option */}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-800 transition-colors duration-150"
            >
              <LogOut className="w-4 h-4 mr-3 text-red-500" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
