import React from "react";
import ReactAudioPlayer from "react-audio-player";
import MP3 from "../../mp3/wXhTHyIgQ_U_48.mp3";

export const PlayerAudio = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <ReactAudioPlayer src={MP3} controls />
    </div>
  );
};
