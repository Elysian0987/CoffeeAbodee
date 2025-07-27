import React from "react";
import "./form.css";

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Welcome to Coffee Abode</h1>
      </header>
      <form className="login-form" action="/Home" method="post">
        <section>
          <h2>Coffee Abode Login</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <label>
            Remember me:
            <input type="checkbox" name="rememberMe" />
          </label>
          <br />
          <button type="submit">Login</button>
        </section>
      </form>
    </div>
  );
};

export default Login;
