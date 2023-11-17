import { Outlet, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { FaCar } from "react-icons/fa6";
import { TbParking } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";

const Layout = () => {
  return (
    <>
      <nav className="bg-white-800 text-black outline outline-1 p-1">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl w-44 font-bold text-black hover:text-gray-500 flex"
          >
            <FaCar className="m-1"></FaCar>GarageBNB
          </Link>

          <div>
            <Link
              to="/"
              className="hover:text-gray-700 text-lg mr-40 mt-3 text-black font-bold py-2 px-3 m-2 flex"
            >
              <TbParking className="m-1"></TbParking>Parkings
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-grow px-4 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-7">
              <IoIosSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Stockholm, Sweden..."
              className="w-full pl-10 border p-2 rounded-lg focus:outline-none"
            />
          </div>

          <button className="lg:hidden focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:flex space-x-4">
            <Link to="/register-user" className="hover:text-blue-500">
              Register User
            </Link>
            <Link to="/register-house" className="hover:text-blue-500">
              Register House
            </Link>
            <Link to="/motorcycle" className="hover:text-blue-500">
              Motorcycle
            </Link>
            <Link to="/car" className="hover:text-blue-500">
              Car
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
