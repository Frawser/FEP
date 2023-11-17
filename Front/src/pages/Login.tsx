import React, { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Login = () => {
    // State variables for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a user object with form data
        const newUser = {
            username,
            email,
            password,
        };

        try {
            // Make a POST request to your API endpoint
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                console.log("User successfully registered!");
            } else {
                console.error("Failed to register user.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    
  return (
    <div className="container flex flex-col mx-auto mt-4">
      <h2 className="text-2xl font-bold flex justify-center">LOGIN</h2>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-6/12 bg-slate-300 p-4 mt-5 rounded"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              Password:
            </label>
            <input
              type="password"
              className="mt-1 p-2 border border-gray-300 bg-slate-400 rounded-md w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Register
            </button>
            <Link to="/register-user" className="text-blue-500 hover:text-blue-700 grow mt-3">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
