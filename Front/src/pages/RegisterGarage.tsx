import { useState } from "react";
import "tailwindcss/tailwind.css";

const RegisterGarage = () => {
  // State variables for form fields
  const [houseName, setHouse] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a user object with form data
    const newGarage = {
      houseName,
      state,
      price,
      category,
    };

    try {
      // Make a POST request to your API endpoint
      const response = await fetch("http://localhost:3000/houses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGarage),
      });

      if (response.ok) {
        console.log("House successfully registered!");
      } else {
        console.error("Failed to register house.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold">Register Garage</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Garage Name:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={houseName}
            onChange={(e) => setHouse(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            State:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price Per Day:
          </label>
          <input
            type="number"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="mc">Motorcycle</option>
            <option value="car">Car</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterGarage;
