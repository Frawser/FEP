import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container mt-4">
      <h2>Register Garage</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Garage Name:</label>
          <input
            type="text"
            className="form-control"
            value={houseName}
            onChange={(e) => setHouse(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">State:</label>
          <input
            type="text"
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price Per Day:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="mc">Motorcycle</option>
            <option value="car">Car</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterGarage;