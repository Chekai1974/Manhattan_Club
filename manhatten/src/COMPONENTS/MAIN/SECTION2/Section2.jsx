import React from "react";
import SliderMenu from "./SliderMenu";
import { products } from "../../DATA/products";
import { useNavigate } from "react-router-dom";
function Section2() {
  const navigation = useNavigate();
  return (
    <section className="section2">
      <div className="section2-container">
        <div className="section2-content">
          <div className="menu-title">
            <p>Top "manhattan" menu</p>
            <h2 onClick={() => navigation("/menu")}>Kitchen</h2>
          </div>
            <SliderMenu items={products} />
          <button className="menu-btn" onClick={() => navigation("/menu")}>
            ALL menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section2;
