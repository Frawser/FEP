import { Outlet, Link } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Logo/Brand</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/register-user" className="nav-link">Register User</Link>
              </li>
              <li className="nav-item">
                <Link to="/register-house" className="nav-link">Register House</Link>
              </li>
              <li className="nav-item">
                <Link to="/motorcycle" className="nav-link">Motorcycle</Link>
              </li>
              <li className="nav-item">
                <Link to="/car" className="nav-link">Car</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;