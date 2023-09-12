import React, { useState } from "react";
import { gallery } from "../DATA/gallery";
import WatchLogo from "../WATCHLOGO/WatchLogo";
import MapPage from "../MAP/MapPage";
import Modal from "./Modal";
function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);
  function openTheModal(id) {
    setId(id)
    setOpenModal(true)
  }
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-content">
          <WatchLogo />
          <h1>Gallery</h1>
          <div className="gallery">
            {gallery.map((elem) => {
              return (
                <div
                  className="card"
                  key={elem.id}
                  onClick={() => openTheModal(elem.id)}
                >
                  <img src={elem.photo} alt="" />
                </div>
              );
            })}
          </div>
          {openModal && <Modal  closeModal={setOpenModal} id={id}></Modal>}
        </div>
      </div>
      <MapPage></MapPage>
    </>
  );
}

export default Gallery;
