import React, { useState } from "react";
import Button from "./Button";

const Ktm = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOutsideClick = (e) => {
    if (showPopup && !e.target.closest(".modal-content")) {
      setShowPopup(false);
    }
  };

  return (
    <div className="p-5 shadow-md rounded-lg border border-gray-300 flex flex-col">
      <div className="flex flex-col">
        <img
          className="rounded-xl object-cover h-48 lg:h-64 mb-4"
          src={props.img}
          alt="img"
        />
        <h3 className="font-semibold text-center text-xl mb-2">
          {props.title}
        </h3>
        <p className="text-center"></p>
        <div className="flex justify-center">
          <Button onClick={handlePopup}>Selengkapnya</Button>
        </div>
      </div>
      {showPopup && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-5 max-w-md rounded-lg modal-content">
            <h1 className="text-lg font-semibold mb-2">{props.title}</h1>
            <p>NIM: {props.nim}</p>
            <p>Jurusan: Informatika</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleClosePopup}>Tutup</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ktm;
