import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Layout from "./pages/Layout";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import RegisterHouse from "./pages/RegisterGarage";
import Motorcycle from "./pages/Motorcycle";
import Car from "./pages/Car";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register-user" element={<RegisterUser />} />
          <Route path="register-house" element={<RegisterHouse />} />
          <Route path="motorcycle" element={<Motorcycle />} />
          <Route path="car" element={<Car />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}