import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Garage } from '../types/types';

const GarageDetails: React.FC = () => {
  const { garageId } = useParams<{ garageId: string }>();
  const [garageDetails, setGarageDetails] = useState<Garage | null>(null);

  useEffect(() => {
    const fetchGarageDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/data/garages/${garageId}`);
        const data: Garage = await res.json();
        setGarageDetails(data);
      } catch (error) {
        console.error('Error fetching garage details:', error);
      }
    };

    fetchGarageDetails();
  }, [garageId]);

  const handleBookNow = () => {
    if (garageDetails) {
      // Retrieve existing selectedGarageIds from localStorage
      const storedGarageIds = localStorage.getItem('selectedGarageIds');
      
      // Parse the storedGarageIds or initialize an empty array if it doesn't exist
      const garageIdsArray = storedGarageIds ? JSON.parse(storedGarageIds) : [];
  
      // Add the current garageId to the array
      garageIdsArray.push(garageDetails._id);
  
      // Save the updated array back to localStorage
      localStorage.setItem('selectedGarageIds', JSON.stringify(garageIdsArray));
    }
  };
  return (
    <div className="container mx-auto mt-4 p-4">
      {garageDetails ? (
        <div className="max-w-4xl mx-auto bg-white rounded-md overflow-hidden shadow-md md:flex">
          <div className="md:w-1/2 p-6">
            <img
              className="w-full h-96 object-cover mb-6 rounded-md"
              src={garageDetails.image}
              alt={garageDetails.garageType}
            />
          </div>
          <div className="md:w-1/2 p-6 rounded-md">
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h2 className="text-3xl font-bold mb-4">{garageDetails.garageType} Details</h2>
              <p className="text-gray-700 mb-2">Owner Name: {garageDetails.garageOwnerName}</p>
              <p className="text-gray-700 mb-2">Address: {garageDetails.adress}</p>
              <p className="text-gray-700 mb-2">Phone: {garageDetails.phone}</p>
              <p className="text-gray-700 mb-2">Email: {garageDetails.email}</p>
              <p className="text-gray-700 mb-2">City: {garageDetails.city}</p>
              <p className="text-gray-700 mb-2">Description: {garageDetails.description}</p>
              <p className="text-gray-700 mb-2">Price: {garageDetails.price}kr/day</p>
              <Link to="/my-parkings">
              <button
                onClick={handleBookNow}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 md:py-1 md:px-2 mt-12 rounded-full"
              >
                Boka Nu!
              </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">Loading...</p>
      )}
    </div>
  );
};

export default GarageDetails;
