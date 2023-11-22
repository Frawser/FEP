import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";
import { Garage } from "../types/types";
import { useSearch } from "../Context/SearchContext";


const Home = () => {
  const [garages, setGarages] = useState<Garage[]>([]);
  const [selectedGarageIds, setSelectedGarageIds] = useState<string[]>([]);
  const { searchTerm } = useSearch();


  useEffect(() => {
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

  const handleBookNow = (garageId: string) => {
    // Add the current garageId to the selectedGarageIds array
    setSelectedGarageIds((prevIds) => {
      const updatedIds = [...prevIds, garageId];
      
      // Save the updated array back to localStorage
      localStorage.setItem('selectedGarageIds', JSON.stringify(updatedIds));
      
      // Log the updated state
      console.log(updatedIds);
  
      return updatedIds;
    });

  };

  const filteredGarages = garages.filter((garage) =>
  garage.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <div className="container mx-auto mt-4">
        <div className="flex justify-center m-5">
          <Link to="/car">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pb-3 w-60 rounded-l-lg">
              BIL
            </button>
          </Link>
          <Link to="/motorcycle">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 pb-3 w-60 rounded-r-lg">
              MC
            </button>
          </Link>
        </div>

        <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGarages.map((garage) => (
            <div key={garage._id} className="w-full m-5 relative">
              <div className="bg-white rounded-md overflow-hidden shadow-md">
                <div className="flex relative">
                  
                  <div>
                    <Link to={`/garage/${garage._id}`}>
                      <img
                        src={garage.image}
                        alt={garage.garageType}
                        className="w-96 h-64 object-cover"
                      />
                    </Link>
                  </div>
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
                    <button
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        handleBookNow(garage._id);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 rounded-full mt-2"
                    >
                      Boka Nu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;