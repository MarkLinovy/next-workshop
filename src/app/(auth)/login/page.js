'use client';

import { useState } from 'react';

export default function Login() {
  const [error, setError] = useState(null);

  if (error) {
    throw error;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/chats');
      if (!res.ok) {
        throw new Error('Failed to login via API');
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1 className="page-title">Login</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">Email</label>
            <input 
              type="email" 
              id="email" 
              className="input" 
              placeholder="Enter your email"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <input 
              type="password" 
              id="password" 
              className="input" 
              placeholder="Enter your password"
              required 
            />
          </div>

          <button type="submit" className="btn" style={{ width: '100%' }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
