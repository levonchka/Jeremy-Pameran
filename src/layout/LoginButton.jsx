import React from "react";

// SVG untuk ikon login
const LoginIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-log-in"
  >
    <path d="M19 12H5l7-7-7 7h14v4h-4v4h4v4z"></path>
  </svg>
);

const LoginButton = () => {
  // Function to handle login click
  const handleLoginClick = () => {
    // Your login logic here
    console.log("Login button clicked");
  };

  return (
    <div className="cursor-pointer login-button" onClick={handleLoginClick}>
      <LoginIcon />
      <span className="ml-2">Login</span>
    </div>
  );
};

export default LoginButton;
