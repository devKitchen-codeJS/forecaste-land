"use client";

const Player = () => {
  const size = {
    width: "100%",
    height: 500,
  };
  const view = "coverart"; // or 'coverart list'
  const theme = "black"; // or 'white'
  return (
    <div>
      <iframe
        // style='border-radius:12px'
        src='https://open.spotify.com/embed/playlist/4Zjli1P13J5mmSCD5iKAXK?utm_source=generator'
        width='100%'
        height='352'
        frameBorder='0'
        // allowfullscreen=''
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'></iframe>
    </div>
  );
};

export default Player;
