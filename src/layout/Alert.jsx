// src/layout/Alert.jsx
import React from "react";
import Swal from "sweetalert2";

const Alert = () => {
  const handleClick = () => {
    Swal.fire({
      icon: "info",
      title: "Coming Soon!",
      text: "This feature is under development.",
    });
  };

  return (
    <button
      className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
      onClick={handleClick}
    >
      Login
    </button>
  );
};

export default Alert;
