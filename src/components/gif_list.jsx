import React from "react";
import Gif from "./gif";

const GifList = ({ gifs, selecGif }) => {
  return (
    <div className="gif-list">
      {gifs.map(({ id }) => (
        <Gif id={id} key={id} selecGif={selecGif} />
      ))}
    </div>
  );
};

export default GifList;
