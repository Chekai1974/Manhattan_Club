import React, { useEffect, useState } from "react";

function SliderMenu({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState("");
  const [pages, setPages] = useState(0);

  useEffect(() => {
    function pagesCalculator() {
      const length = items.length;
      const quantity_pages = length / 6;
      if (quantity_pages % 6 === 0) {
        setPages(quantity_pages);
      } else {
        const ceil = Math.ceil(quantity_pages);
        setPages(ceil);
      }
    }
    pagesCalculator();
  }, []);
  function nextSlide() {
    const newIndex =
      currentIndex + 6 > items.length ? currentIndex : currentIndex + 6;

    setActive("animate-in");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setActive("");
    }, 400);
  }

  function prevSlide() {
    const newIndex = currentIndex - 6 < 0 ? currentIndex : currentIndex - 6;
    setActive("animate-in");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setActive("");
    }, 400);
  }
  return (
      <div className={`slider-menu ${active}`}>
        <button onClick={() => prevSlide()} className="prev-btn">
          🢀
        </button>
        {items.slice(currentIndex, currentIndex + 6).map((elem, id) => {
          return (
            <div key={id} className="slide">
              <img src={elem.photo} alt="" />
              <div className="info">
                <h3 id="title">{elem.title}</h3>
                <p id="price">{elem.price + " UAH"}</p>
                <p id="weight">{elem.weight}</p>
                <p id="description">{elem.description}</p>
              </div>
            </div>
          );
        })}
        <button onClick={() => nextSlide()} className="next-btn">
          🢂
        </button>
      </div>
  );
}

export default SliderMenu;
