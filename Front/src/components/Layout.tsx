import { Outlet, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { FaCar } from "react-icons/fa6";
import { TbParking } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Garage } from "../types/types";
import { useSearch } from "../Context/SearchContext";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();
  const [garages, setGarages] = useState<Garage[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }

    const fetchGarages = async () => {
      try {
        const res = await fetch("http://localhost:3000/data/garages/all");
        const data = await res.json();
        setGarages(data);
      } catch (error) {
        console.error("Error fetching garages:", error);
      }
    };

    fetchGarages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white-800 text-black outline outline-1 p-1 flex-shrink-0">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl w-44 font-bold text-black hover:text-gray-500 flex"
          >
            <FaCar className="mt-1 mr-1" />
            GarageBNB
          </Link>

          <div className="lg:ml-auto hidden lg:flex mr-32">
            <Link
              to="/"
              className="hover:text-gray-700 text-lg mt-3 text-black font-bold py-2 px-3 m-2 flex"
            >
              <TbParking className="mt-1 mr-1" />
              Parkings
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-grow px-4 flex lg:mr-64 lg items-center justify-center mt-3 lg:mt-0">
            <input
              type="text"
              placeholder="Stockholm, Göteborg..."
              className="w-full pl-4 border p-2 rounded-l-lg focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-400 focus:outline-none">
              Search
            </button>
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex space-x-4 lg:ml-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/my-parkings"
                  className="hover:text-gray-500 font-bold"
                >
                  My Parkings
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-gray-500 focus:outline-none font-bold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="hover:text-gray-500">
                <FaUser className="inline-block ml-20 mr-1 mb-1 font-bold" />
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-3 flex-grow">
        <Outlet/>
      </div>

      {/* Footer */}
      <div className="bg-black h-0.5"></div>
      <div className="container mx-auto mt-3 lg:hidden flex-shrink-0 py-4">
        <div className="flex justify-center items-center">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/my-parkings" className="hover:text-gray-500 font-bold">
                My Parkings
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-gray-500 focus:outline-none font-bold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-gray-500 font-bold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
