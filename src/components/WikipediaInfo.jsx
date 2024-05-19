import React, { useState, useEffect } from "react";
import axios from "axios";

const JawaBaratInfo = () => {
  const [info, setInfo] = useState(null);
  const [makanan, setMakanan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infoResponse = await axios.get(
          "https://id.wikipedia.org/api/rest_v1/page/summary/Jawa_Barat"
        );
        setInfo(infoResponse.data);

        const makananResponse = await axios.get(
          "https://id.wikipedia.org/api/rest_v1/page/summary/Makanan_Khas_Jawa_Barat"
        );
        setMakanan(makananResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wikipedia-info">
      <div className="box-container">
        <div
          className="box"
          style={{ marginTop: "30px", marginLeft: "20px", marginRight: "20px" }}
        >
          <h2>Informasi Jawa Barat</h2>
          {info ? (
            <div>
              <h3>{info.title}</h3>
              <p>{info.extract}</p>
              <p>
                Lebih lanjut:{" "}
                <a href={info.content_urls.desktop.page}>Wikipedia</a>
              </p>
            </div>
          ) : (
            <p> Gagal Mengambil data...</p>
          )}
        </div>
      </div>
      <div className="box-container">
        <div
          className="box"
          style={{ marginTop: "30px", marginLeft: "20px", marginRight: "20px" }}
        >
          <h2>Makanan Khas Jawa Barat</h2>
          {makanan ? (
            <div>
              <h3>{makanan.title}</h3>
              <p>{makanan.extract}</p>
              <p>
                Lebih lanjut:{" "}
                <a href={makanan.content_urls.desktop.page}>Wikipedia</a>
              </p>
            </div>
          ) : (
            <p>Mengambil data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const WikipediaInfo = () => {
  return (
    <div>
      <JawaBaratInfo />
    </div>
  );
};

export default WikipediaInfo;
