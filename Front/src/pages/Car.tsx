import { Link } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";

const Car = () => {
  return (
    <div>
      <div className="container mx-auto mt-4">
        <div className="flex justify-center m-5">
          <Link to="/car">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-60 rounded-l-lg border-2 border-black">
              CAR
            </button>
          </Link>
          <Link to="/motorcycle">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 pb-3 w-60 rounded-r-lg">
              MC
            </button>
          </Link>
        </div>

        <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full m-5 relative">
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <Link to="/motorcycle" className="flex relative">
                <img
                  src="https://shedsunlimited.b-cdn.net/wp-content/uploads/fly-images/15735/amish-built-portable-garage-1100x9999.jpg"
                  alt="Card 1"
                  className="w-8/12 h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <h5 className="text-m text-white bg-gray-700/50 p-1 rounded-md">
                    <HiMapPin className="inline-block mr-1 mb-1"></HiMapPin>
                    Nacka
                  </h5>
                </div>
                <div className="p-4">
                  <h5 className="text-xl font-bold mb-2">CAR</h5>
                  <p className="text-gray-700 lg:mb-16">
                    Nearest train station 50m away.
                  </p>
                  <p className="text-gray-700 font-bold mt-6 md:mt-2">
                    90kr/day
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 rounded-full mt-6 md:mt-1">
                    Book Now
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full m-5 relative">
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <Link to="/motorcycle" className="flex relative">
                <img
                  src="https://shedsunlimited.b-cdn.net/wp-content/uploads/fly-images/15735/amish-built-portable-garage-1100x9999.jpg"
                  alt="Card 1"
                  className="w-8/12 h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4">
                  <h5 className="text-m text-white bg-gray-700/50 p-1 rounded-md">
                    <HiMapPin className="inline-block mr-1 mb-1"></HiMapPin>
                    Nacka
                  </h5>
                </div>
                <div className="p-4">
                  <h5 className="text-xl font-bold mb-2">CAR</h5>
                  <p className="text-gray-700 lg:mb-16">
                    Nearest train station 50m away.
                  </p>
                  <p className="text-gray-700 font-bold mt-6 md:mt-2">
                    90kr/day
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 rounded-full mt-6 md:mt-1">
                    Book Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
