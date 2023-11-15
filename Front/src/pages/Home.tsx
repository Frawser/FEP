import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <h1 className="text-4xl font-bold">Welcome to GarageBNB</h1>
          <p className="mt-4 text-lg">Book safe and cheap garages.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-4">
        <div className="mb-4">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <Link to="/motorcycle">
              <img
                src="https://www.husesset.com/wp-content/uploads/2016/02/MC-garage.jpg"
                alt="Card 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Explore Motorcycle Garages</h5>
                <p className="text-gray-700">
                  Find close, safe, and unique places to stay.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-4">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <Link to="/car">
              <img
                src="https://shedsunlimited.b-cdn.net/wp-content/uploads/fly-images/15735/amish-built-portable-garage-1100x9999.jpg"
                alt="Card 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h5 className="text-xl font-bold mb-2">Explore Car Garages</h5>
                <p className="text-gray-700">
                  Discover car garage nearby or in faraway places.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
