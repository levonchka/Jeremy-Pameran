import React, { useState, useEffect } from "react";
import Button from "../layout/Button";
import axios from "axios";
import backsound from "../assets/audio/backsound.mp3";
import ketoprakImage from "../assets/img/ketoprak.jpg"; // Import the image

const Home = () => {
  const [time, setTime] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isMuted, setIsMuted] = useState(true); // Default state untuk menyimpan status mute/unmute
  const [audioElement, setAudioElement] = useState(null); // State untuk menyimpan elemen audio

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await axios.get("https://worldtimeapi.org/api/ip");
        setTime(response.data.datetime);
      } catch (error) {
        console.error("Error fetching time:", error);
      }
    };

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Bandung,id&appid=af42db3b52dde6e6609d5c84bc1aa410&units=metric"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchTime();
    fetchWeather();

    // Buat elemen audio dan simpan ke dalam state
    const audio = new Audio(backsound);
    setAudioElement(audio);

    const interval = setInterval(fetchTime, 1000); // Refresh time every second

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
      if (audioElement) {
        audioElement.pause(); // Pause audio saat komponen di-unmount
      }
    };
  }, []); // useEffect hanya dipanggil sekali saat komponen dimuat

  useEffect(() => {
    // Mengatur pemutaran audio berdasarkan status isMuted saat komponen di-update
    if (audioElement) {
      if (isMuted) {
        audioElement.pause(); // Pause audio jika muted
      } else {
        audioElement.play(); // Mainkan audio jika unmuted
      }
    }
  }, [isMuted]); // useEffect di-trigger ketika isMuted berubah

  const toggleMute = () => {
    setIsMuted(!isMuted); // Toggle status mute/unmute
  };

  return (
    <div
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${ketoprakImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-6xl">Sampurasun</h1>

        <p className="text-white font-semibold text-2xl" style={{ marginTop: "100px" }}>
          {/* Adjusted inline style here */}
          Waktu saat ini: {time}
        </p>
        {weatherData && (
          <div className="text-white">
            <p>Cuaca di Bandung saat ini:</p>
            <p>Temperatur: {weatherData.main.temp}°C</p>
            <p>Deskripsi: {weatherData.weather[0].description}</p>
            <p>Angin: {weatherData.wind.speed} m/s</p>
            <p>Kelembaban: {weatherData.main.humidity}%</p>
          </div>
        )}
        <div>
          <Button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</Button>
        </div>
      </div>
      {audioElement && <audio src={backsound} loop muted={isMuted} autoPlay />}
    </div>
  );
};

export default Home;
