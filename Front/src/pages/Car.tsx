import 'tailwindcss/tailwind.css';

const CarGarage = () => {
  // Sample data for car garages
  const carGarages = [
    { id: 1, name: 'Garage X', pricePerDay: 40 },
    { id: 2, name: 'Garage Y', pricePerDay: 45 },
    { id: 3, name: 'Garage Z', pricePerDay: 38 },
  ];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Car Garages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carGarages.map((garage) => (
          <div key={garage.id} className="mb-4">
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/300"
                className="w-full h-48 object-cover"
                alt={`Garage ${garage.name}`}
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">{garage.name}</h5>
                <p className="text-gray-700">Price per day: ${garage.pricePerDay}</p>
                <a href="#" className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGarage;
