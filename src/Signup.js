// Signup.js

import React, { useState } from 'react';
import copilot from 'copilot-kit';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      // Call CopilotKit API to create a new user account
      const response = await copilot.signup(email, password);
      if (response.success) {
        alert('Account created successfully!');
      } else {
        alert('Error creating account');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
