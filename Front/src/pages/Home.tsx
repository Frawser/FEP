import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1>Welcome to GarageBNB</h1>
          <p>Book safe and cheap garages.</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4">
          <div className="card">
            <Link to="/motorcycle" className="nav-link">
              <img
                src="https://www.husesset.com/wp-content/uploads/2016/02/MC-garage.jpg"
                alt="Card 1"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Explore Motorcycle Garages</h5>
                <p className="card-text">
                  Find close, safe, and unique places to stay.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
          <Link to="/car" className="nav-link">
            <img
              src="https://shedsunlimited.b-cdn.net/wp-content/uploads/fly-images/15735/amish-built-portable-garage-1100x9999.jpg"
              alt="Card 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Explore Car Garages</h5>
              <p className="card-text">
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