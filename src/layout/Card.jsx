// Card.jsx
import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./Button";

const Card = (props) => {
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
    <div className="w-full lg:w-1/4 p-5 shadow-md rounded-lg border border-gray-300">
      <div className="flex flex-col h-full">
        <img
          className="rounded-xl object-cover h-48 lg:h-64"
          src={props.img}
          alt="img"
        />
        <div className="flex flex-col flex-grow justify-center items-center mt-4">
          <h3 className="font-semibold text-center text-xl">{props.title}</h3>
          <div className="flex justify-center items-center mt-2">
            <BsStarFill className="text-yellow-400 mr-1" />
            <BsStarFill className="text-yellow-400 mr-1" />
            <BsStarFill className="text-yellow-400 mr-1" />
            <BsStarFill className="text-yellow-400 mr-1" />
            <BsStarHalf className="text-yellow-400" />
          </div>
          <div className="flex justify-center items-center mt-2">
            <h3 className="font-semibold text-lg">{props.price}</h3>
            <Button onClick={handlePopup}>Selengkapnya</Button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white p-5 max-w-md rounded-lg modal-content">
            <h3 className="text-lg font-semibold mb-2">Deskripsi Makanan</h3>
            <p>{props.description}</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={handleClosePopup}>Tutup</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
