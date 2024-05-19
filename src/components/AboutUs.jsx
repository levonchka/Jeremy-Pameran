import React from "react";
import Ktm from "../layout/Ktm";

import jeremy from "../assets/img/masjer.jpg";
import reyner from "../assets/img/reyrajaiblis.jpeg";
import lian from "../assets/img/lian.jpeg";
import yuda from "../assets/img/masyuda.jpg";
import mekel from "../assets/img/mekel2.jpeg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Jeremy Dominic",
      nim: "00000103941",
      img: jeremy,
      description: "Deskripsi Jeremy",
    },
    {
      name: "Reyner Devlin S.",
      nim: "00000103703",
      img: reyner,
      description: "Deskripsi Reyner",
    },
    {
      name: "Parsaulian Mian",
      nim: "00000101728",
      img: lian,
      description: "Deskripsi Lian",
    },
    {
      name: "Yuda Kusuma",
      nim: "00000110913",
      img: yuda,
      description: "Deskripsi Yuda",
    },
    {
      name: "Michael",
      nim: "00000101966",
      img: mekel,
      description: "Deskripsi Michael",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center text-4xl font-semibold mb-8">Tentang Kita</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <Ktm
            key={index}
            img={member.img}
            title={member.name}
            nim={member.nim}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
