import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/form.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded admin credentials
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Successful login
      console.log('Login successful');
      navigate('/home');
    } else {
      // Failed login
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <header className="login-header">
          <h1>Coffee Abode</h1>
          <h2>Login</h2>
        </header>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-btn">Login</button>
        </form>

        <p className="hint-text">
          💡 <strong>Hint:</strong> Use <code>admin</code> / <code>admin</code> as username and password to proceed
        </p>
      </div>
    </div>
  );
};

export default Login;