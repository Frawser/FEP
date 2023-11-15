import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterUser = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        console.log('User successfully registered!');
        
      } else {
        console.error('Failed to register user.');
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  

  

  return (
    <div className="container mt-4">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;