// Import necessary React components and hooks
import React, { useState } from 'react';

// Define your functional component
function LoginForm() {
  // State to store user credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = () => {
    // Make the fetch request
    fetch('http://localhost:3006/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful response (e.g., update state or navigate to another page)
        console.log('Login successful:', data);
      })
      .catch(error => {
        // Handle errors (e.g., display an error message to the user)
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  // JSX for the login form
  return (
    <div>
      {/* Your login form JSX here */}
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// Export the component
export default LoginForm;
