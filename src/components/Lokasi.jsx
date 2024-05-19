import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Icon } from "leaflet";
import Kartu from "../layout/Kartu";
import daunhejo from "../assets/img/daunhejo.jpg";
import dsawah from "../assets/img/dsawah.jpg";
import sundaraos from "../assets/img/sundaraos.jpg";

const Lokasi = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "514d9c5b5ffc26e1c7e08860fa880543";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${apiKey}&units=metric`;
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  const markerIcon = new Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Lokasi Restoran Sunda Terdekat di Gading Serpong
      </h1>
      <div
        className="mb-4"
        style={{
          height: "400px",
          width: "100%",
          maxWidth: "800px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={[-6.2401, 106.6287]}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <ZoomControl position="topright" />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-6.242739, 106.628085]} icon={markerIcon}>
            <Popup>Waroeng Sunda</Popup>
          </Marker>
          <Marker position={[-6.24524, 106.623489]} icon={markerIcon}>
            <Popup>Tatar Sunda</Popup>
          </Marker>
          <Marker position={[-6.244123, 106.627456]} icon={markerIcon}>
            <Popup>Mak Gobang</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <Kartu img={daunhejo} name="Waroeng Sunda" />
        <Kartu img={dsawah} name="Tatar Sunda" />
        <Kartu img={sundaraos} name="Mak Gobang" />
      </div>
      {weatherData && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold">Cuaca di Gading Serpong:</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperatur: {weatherData.main.temp}°C</p>
          <p>Kelembaban: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Lokasi;
