import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Garage } from '../types/types';

const MyParkings: React.FC = () => {
  const [selectedGarages, setSelectedGarages] = useState<Garage[]>([]);

  const fetchGarageDetails = async (garageIds: string[]) => {
    const detailsPromises = garageIds.map(async (garageId) => {
      try {
        const res = await fetch(`http://localhost:3000/data/garages/${garageId}`);
        const data: Garage = await res.json();
        return data;
      } catch (error) {
        console.error('Error fetching garage details:', error);
        return null;
      }
    });

    const garageDetails = await Promise.all(detailsPromises);
    const filteredGarageDetails = garageDetails.filter((garage): garage is Garage => garage !== null);
    setSelectedGarages(filteredGarageDetails);
  };

  useEffect(() => {
    // Retrieve garage IDs array from localStorage
    const storedGarageIds = localStorage.getItem('selectedGarageIds');

    if (storedGarageIds) {
      const idsArray = JSON.parse(storedGarageIds) as string[];
      fetchGarageDetails(idsArray);
    }
  }, []);

  const handleRemoveGarage = (garageId: string) => {
    // Retrieve existing selectedGarageIds from localStorage
    const storedGarageIds = localStorage.getItem('selectedGarageIds');

    if (storedGarageIds) {
      // Parse the storedGarageIds
      const garageIdsArray = JSON.parse(storedGarageIds) as string[];

      // Find the index of the specified garageId
      const indexToRemove = garageIdsArray.indexOf(garageId);

      if (indexToRemove !== -1) {
        // Remove the first occurrence of the specified garageId
        const updatedGarageIds = [
          ...garageIdsArray.slice(0, indexToRemove),
          ...garageIdsArray.slice(indexToRemove + 1),
        ];

        // Save the updated array back to localStorage
        localStorage.setItem('selectedGarageIds', JSON.stringify(updatedGarageIds));

        // Fetch updated garage details
        fetchGarageDetails(updatedGarageIds);
      }
    }
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      {selectedGarages.length > 0 ? (
        <div>
          {selectedGarages.map((garage) => (
            <div
              key={garage._id}
              className="max-w-4xl mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4 md:flex"
            >
              <div className="md:w-1/2 p-6">
                <img
                  className="w-full h-96 object-cover mb-6 rounded-md"
                  src={garage.image}
                  alt={garage.garageType}
                />
              </div>
              <div className="md:w-1/2 p-6 rounded-md">
                <div className="bg-gray-100 p-4 rounded-md mb-6">
                  <h2 className="text-3xl font-bold mb-4">{garage.garageType} Details</h2>
                  <p className="text-gray-700 mb-2">Owner Name: {garage.garageOwnerName}</p>
                  <p className="text-gray-700 mb-2">Address: {garage.adress}</p>
                  <p className="text-gray-700 mb-2">Phone: {garage.phone}</p>
                  <p className="text-gray-700 mb-2">Email: {garage.email}</p>
                  <p className="text-gray-700 mb-2">City: {garage.city}</p>
                  <p className="text-gray-700 mb-2">Description: {garage.description}</p>
                  <p className="text-gray-700 mb-2">Price: {garage.price}kr/day</p>
                  <Link
                    to={`/garage/${garage._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 mt-4 rounded-full"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleRemoveGarage(garage._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 mt-4 ml-2 rounded-full"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">No parked garages.</p>
      )}
    </div>
  );
};

export default MyParkings;
