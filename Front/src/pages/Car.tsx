import { Link } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { Garage } from "../types/types";

const Car = () => {
  const [garages, setGarages] = useState<Garage[]>([]);

  useEffect(() => {
    const fetchGarages = async () => {
      try {
        const res = await fetch("http://localhost:3000/data/garages/all");
        const data = await res.json();
        // Filter garages with garageType === "CAR"
        const mcGarages = data.filter(
          (garage: Garage) => garage.garageType === "CAR"
        );
        setGarages(mcGarages);
      } catch (error) {
        console.error("Error fetching garages:", error);
      }
    };

    fetchGarages();
  }, []);
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
          {garages.map((garage) => (
            <div key={garage._id} className="w-full m-5 relative">
              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <Link to={`/garage/${garage._id}`} className="flex relative">
                  <img
                    src={garage.image}
                    alt={garage.garageType}
                    className="w-8/12 h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h5 className="text-m text-white bg-gray-700/50 p-1 rounded-md">
                      <HiMapPin className="inline-block mr-1 mb-1"></HiMapPin>
                      {garage.adress}
                    </h5>
                  </div>
                  <div className="p-4">
                    <h5 className="text-xl font-bold mb-2">
                      {garage.garageType}
                    </h5>
                    <p className="text-gray-700 lg:mb-16">
                      {garage.description}
                    </p>
                    <p className="text-gray-700 font-bold mt-6">
                      {garage.price}kr/dag
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 rounded-full mt-12 md:mt-2">
                      Boka Nu
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Car;
