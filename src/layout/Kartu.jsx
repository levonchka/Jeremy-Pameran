import React from "react";

const Kartu = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,0,0,0.24) 0px 3px 8px]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center">
        <div className="md:mr-4">
          <img
            className="rounded-full w-20 h-20 md:w-24 md:h-24"
            src={props.img}
            alt="img"
          />
        </div>
        <div>
          <h3 className="font-semibold">{props.name}</h3>
          <p className="text-lightText">
            Ieu teh rekomendasi bade nu rek nyobaan masakan ti sunda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kartu;
