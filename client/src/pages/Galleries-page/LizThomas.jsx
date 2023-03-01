import React from "react";
import "../../css/PhotoAlbum.css";
import AlbumLizThomas from "../../data/Album/AlbumLizThomas";

const LizThomas = () => {
  return (
    <>
      <main>
        <h2 className="photo-album--header">Liz + Thomas</h2>
        <div className="photo-album--container">
          {AlbumLizThomas.map((photo) => {
            const { imgSrc } = photo;

            return (
              <div className="each-photo--container">
                <img src={imgSrc} alt="" />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default LizThomas;
