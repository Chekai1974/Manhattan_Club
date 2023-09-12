import React from "react";
import { useState } from "react";
import { gallery } from "../DATA/gallery";

function Modal({ closeModal, id }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const additional = gallery[id].additional.map((elem) => elem);
  function nextSlide() {
    const newIndex =
      currentIndex + 1 > additional.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  function prevSlide() {
    const newIndex =
      currentIndex - 1 < 0 ? additional.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  console.log(currentIndex);
  console.log(additional.length);
  return (
    <div className="modal-container">
      <div
        className="modal-content"
        style={{ backgroundImage: `url(${additional[currentIndex]})` }}
      >
        <h1 onClick={() => closeModal(false)}>X</h1>
        <button className="last" onClick={() => prevSlide()}>
          🢀
        </button>
        <button className="next" onClick={() => nextSlide()}>
          🢂
        </button>
      </div>
    </div>
  );
}

export default Modal;
