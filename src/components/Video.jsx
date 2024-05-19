import React, { useEffect, useState } from "react";
import axios from "axios";

const Video = () => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=3v2EnCLWAHk&key=AIzaSyAwl8cw5un4AoRXmIMbROYCoB4Kvg70JC4"
        );
        const videoId = response.data.items[0].id;
        setVideoUrl(
          `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`
        );
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px", // Sesuaikan margin sesuai kebutuhan
      }}
    >
      {videoUrl && (
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={videoUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={false}
        ></iframe>
      )}
    </div>
  );
};

export default Video;
