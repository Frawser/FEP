import { Outlet, Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { FaCar } from "react-icons/fa6";

const Layout = () => {
  return (
    <>
      <nav className="bg-white-800 text-black outline p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl w-96 font-bold text-black hover:text-gray-500 flex">
          <FaCar className="m-1"></FaCar>GarageBNB
          </Link>

          {/* Search Bar */}
          <div className="flex-grow px-4">
            <input
              type="text"
              placeholder="Stockholm..."
              className="w-full border p-2 rounded-lg focus:outline-none"
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
            <Link to="/register-user" className="hover:text-blue-500">Register User</Link>
            <Link to="/register-house" className="hover:text-blue-500">Register House</Link>
            <Link to="/motorcycle" className="hover:text-blue-500">Motorcycle</Link>
            <Link to="/car" className="hover:text-blue-500">Car</Link>
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

