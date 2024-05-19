import React, { useState, useEffect } from "react";
import Button from "../layout/Button";
import axios from "axios";
import backsound from "../assets/audio/backsound.mp3";

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
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/ketoprak.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-6xl">Sampurasun</h1>
        <p className="text-white text-xl md:text-2xl">
          Teman-teman semua, dari laman ini kita akan mengenal kekayaan khas
          Jawa Barat. Terimakasih kepada teman-teman semua yang ingin melihat
          website ini. Semoga Tuhan memberkati.
        </p>
        <p className="text-white text-lg md:text-xl italic">
          "Rerencangan sadaya, ti laman ieu urang bade ngawanohkeun kadaharan
          khas Jawa Barat. Hatur nuhun ka rerencangan sadaya nu bade manggihan
          abdi dina laman ieu. Mugi gusti ngaberkahan rerencangan."
        </p>
        <p className="text-white font-semibold text-2xl">
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
