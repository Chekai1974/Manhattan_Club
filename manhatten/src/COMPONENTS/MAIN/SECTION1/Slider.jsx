import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClasses, setAnimationClasses] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimationClasses("animate-in");
    }, 4500);
  }, []);
  const prevSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? items.length - 1 : currentIndex - 4;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide = currentIndex === items.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 4;
    setCurrentIndex(newIndex);
    setAnimationClasses("");
    setTimeout(() => {
      setAnimationClasses("animate-in");
    }, 4500);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5500);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  const navigation = useNavigate()
  function go_to_posts() {
    navigation("/poster")
  }
  return (
    <div className="slider">
      {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
        <div key={index} className={`slide ${animationClasses}`}>
          <img src={item.photo} alt={item.title} onClick={() => go_to_posts()} />
        </div>
      ))}
    </div>
  );
};
export default Slider;
