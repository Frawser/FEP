import 'bootstrap/dist/css/bootstrap.min.css';

const CarGarage = () => {
  // Sample data for car garages
  const carGarages = [
    { id: 1, name: 'Garage X', pricePerDay: 40 },
    { id: 2, name: 'Garage Y', pricePerDay: 45 },
    { id: 3, name: 'Garage Z', pricePerDay: 38 },
  ];

  return (
    <div className="container mt-4">
      <h2>Car Garages</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {carGarages.map((garage) => (
          <div key={garage.id} className="col">
            <div className="card">
              <img
                src="https://via.placeholder.com/300"
                className="card-img-top"
                alt={`Garage ${garage.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{garage.name}</h5>
                <p className="card-text">Price per day: ${garage.pricePerDay}</p>
                <a href="#" className="btn btn-primary">
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