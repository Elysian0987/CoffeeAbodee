import React, { useEffect } from "react"; // Import useEffect for side effects
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "../components/form.css"; // Assuming this CSS file contains styles for the login form (can be removed if not needed for this simple redirect)

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // useEffect runs after the component renders.
  // The empty dependency array `[]` ensures it runs only once, on mount.
  useEffect(() => {
    console.log('Redirecting to Home...');
    navigate('./Home'); // Immediately redirect to the home page
  }, [navigate]); // Add navigate to dependency array to satisfy ESLint, though it's stable

  // This component won't display a form as it redirects immediately.
  // We return null or a simple message while the redirect happens.
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Redirecting...</h1>
      </header>
      <p>Please wait, you are being redirected to the home page.</p>
    </div>
  );
};

export default Login;