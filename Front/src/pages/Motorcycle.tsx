import 'tailwindcss/tailwind.css';

const Motorcycle = () => {
  // Sample data for motorcycle garages
  const garages = [
    { id: 1, name: 'Garage A', pricePerDay: 20 },
    { id: 2, name: 'Garage B', pricePerDay: 25 },
    { id: 3, name: 'Garage C', pricePerDay: 18 },
  ];

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold">Motorcycle Garages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {garages.map((garage) => (
          <div key={garage.id} className="mb-4">
            <div className="bg-white rounded-md overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/300"
                className="w-full h-64 object-cover"
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

export default Motorcycle;
