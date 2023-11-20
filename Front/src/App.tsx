import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'tailwindcss/tailwind.css'; 
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import RegisterGarage from "./pages/RegisterGarage";
import Motorcycle from "./pages/Motorcycle";
import Car from "./pages/Car";
import Login from "./pages/Login";
import GarageDetails from "./pages/garageDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register-user" element={<RegisterUser />} />
          <Route path="register-garage" element={<RegisterGarage />} />
          <Route path="motorcycle" element={<Motorcycle />} />
          <Route path="car" element={<Car />} />
          <Route path="login" element={<Login />} />
          <Route path="garage/:garageId" element={<GarageDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}