import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Garage {
  _id: string;
  garageOwnerName: string;
  adress: string;
  phone: number;
  email: string;
  garageType: string;
  price: number;
  description: string;
  image: string;
  city: string;
}

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

  return (
    <div className="container mx-auto mt-4">
      {garageDetails ? (
        <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
          <img
            className="w-full h-64 object-cover"
            src={garageDetails.image}
            alt={garageDetails.garageType}
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{garageDetails.garageType} Details</h2>
            <p className="text-gray-700 mb-2">Address: {garageDetails.adress}</p>
            <p className="text-gray-700 mb-2">Description: {garageDetails.description}</p>
            <p className="text-gray-700">Price: {garageDetails.price}kr/day</p>
          </div>
        </div>
      ) : (
        <p className="text-center mt-4">Loading...</p>
      )}
    </div>
  );
};

export default GarageDetails;
