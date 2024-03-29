import { useState } from "react";
import "tailwindcss/tailwind.css";


const RegisterGarage = () => {
  // State variables for form fields
  const [garageOwnerName, setGarageOwnerName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [garageType, setGarageType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Convert price and phone to numbers
    const convertedPrice = parseInt(price);
    const convertedPhone = parseInt(phone, 10);

    // Create a user object with form data
    const newGarage = {
      garageOwnerName,
      adress,
      phone: isNaN(convertedPhone) ? 0 : convertedPhone,
      email,
      garageType,
      price: isNaN(convertedPrice) ? 0 : convertedPrice,
      description,
      image,
      city,
    };

    try {
      // Make a POST request to your API endpoint
      const response = await fetch("http://localhost:3000/data/garages/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGarage),
      });

      if (response.ok) {
        console.log("Garage successfully registered!");
        //redirect to home page
        window.location.href = "/";
      } else {
        console.error("Failed to register garage.");
        console.log(newGarage);
        console.log(response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container flex flex-col mx-auto mt-4">
      <h2 className="text-2xl font-bold flex justify-center">
        Register Garage
      </h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-6/12 bg-slate-300 p-4 mt-5 rounded mb-20"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Owner Full Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={garageOwnerName}
              onChange={(e) => setGarageOwnerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="number"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Garage Type:
            </label>
            <select
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={garageType}
              onChange={(e) => setGarageType(e.target.value)}
              required
            >
              <option value="CAR">Car</option>
              <option value="MC">Motorcycle</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price (SEK / per day):
            </label>
            <input
              type="number"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterGarage;
