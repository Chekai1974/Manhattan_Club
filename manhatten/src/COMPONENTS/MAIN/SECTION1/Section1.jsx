import React from "react";
import SliderPosters from "./SliderPosters";
import main_photo from "../../../IMAGES/section1-main-photo.png";
import post1 from "../../../IMAGES/Post1.png";
import post2 from "../../../IMAGES/Post2.png";
import post3 from "../../../IMAGES/Post3.png";
import post4 from "../../../IMAGES/Post4.png";
function Section1() {
  const items = [
    { photo: post1, title: "Item 1" },
    { photo: post2, title: "Item 2" },
    { photo: post3, title: "Item 3" },
    { photo: post4, title: "Item 4" },
    { photo: post4, title: "Item 5" },
    { photo: post3, title: "Item 6" },
    { photo: post2, title: "Item 7" },
    { photo: post1, title: "Item 8" },
    { photo: post2, title: "Item 9" },
  ];
  return (
    <section className="section1">
      <div className="section1-container">
        <div className="section1-content">
          <div
            className="section1-main-photo"
            style={{ backgroundImage: `url(${main_photo})` }}
          >
            <h2>SINCE 1996</h2>
            <p>
              True. Fontanka. <br /> Underground.{" "}
            </p>
          </div>
          <div className="slider-container">
            <h3>upcoming performances</h3>
            <SliderPosters items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
