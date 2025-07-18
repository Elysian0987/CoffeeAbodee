import React from 'react';
// import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add login validation here
    navigate('/home');
  };

  return (
    <div className="login-container">
      <header>
        <h1>Welcome to Coffee Abode</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <section>
          <h2>Coffee Abode Login</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <button type="submit">Login</button>
        </section>
      </form>
    </div>
  );
}

export default Login;
