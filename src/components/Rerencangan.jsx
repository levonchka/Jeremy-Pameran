import React, { useState } from "react";
import img from "../assets/img/logojabar.jpg";
import Button from "../layout/Button";
import Modal from "../layout/Modal";

const Rerencangan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-30 px-5">
      <img src={img} alt="Logo Jabar" width="150px" />

      <ContentSection onButtonClick={toggleModal} />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ModalContent />
      </Modal>
    </div>
  );
};

const ContentSection = ({ onButtonClick }) => (
  <div className="space-y-4 lg:pt-14">
    <h1 className="font-semibold text-4xl text-center md:text-start">
      Kenapa Jabar?
    </h1>
    <p>
      Masakan Sunda dan daerah Jawa Barat memiliki daya tarik yang khas dan
      unik. <strong>Masakan Sunda</strong> dikenal dengan rasa yang segar,
      beragam bumbu rempah, serta penggunaan bahan-bahan lokal seperti daun
      singkong, kacang kedelai, dan ikan air tawar. Daerah Jawa Barat juga
      memiliki tradisi kuliner yang kaya. Selain itu, keberagaman budaya dan
      sejarah di wilayah ini juga mempengaruhi variasi masakan, menjadikannya
      pilihan menarik bagi pecinta kuliner.
    </p>
    <p>
      Tong hilapnya!! Dicobaan eta kadaharanna (Jangan Lupa!! Dicoba ya
      makanannya!!!)
    </p>
    <div className="flex justify-center lg:justify-start">
      <Button onClick={onButtonClick}>Selengkapnya</Button>
    </div>
  </div>
);

const ModalContent = () => (
  <>
    <h2 className="text-2xl font-semibold mb-4">Masakan Jawa Barat</h2>
    <p>
      Untuk Informasi lebih lanjut, pantau terus di instagram kita di instagram
      @saungkuringumn
    </p>
  </>
);

export default Rerencangan;
