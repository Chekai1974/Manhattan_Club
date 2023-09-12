import React, { useEffect, useState } from "react";
import { products } from "../DATA/products";
import MapPage from "../MAP/MapPage";
import WatchLogo from "../WATCHLOGO/WatchLogo";
import { useNavigate } from "react-router-dom";
function Menu() {
  const [allProducts, setAllProducts] = useState([]);
  const [option, setOption] = useState("allMenu");
  useEffect(() => {
    setAllProducts(products);
  }, []);
  const navigation = useNavigate();

  useEffect(() => {
    if (option === "allMenu") {
      setAllProducts(products);
    }
    if (option === "burgers") {
      setAllProducts(products.filter((elem) => elem.category === "burgers"));
    }
    if (option === "salads") {
      setAllProducts(products.filter((elem) => elem.category === "salads"));
    }
    if (option === "dish") {
      setAllProducts(products.filter((elem) => elem.category === "dish"));
    }
    if (option === "deserts") {
      setAllProducts(products.filter((elem) => elem.category === "deserts"));
    }
  }, [option]);

  function sortPosition(e) {
    setOption(e.target.value);
  }
  const renderCards = (elem) => {
    return (
      <div key={elem.id} className="slide">
        <img src={elem.photo} alt="" />
        <div className="info">
          <h3 id="title">{elem.title}</h3>
          <p id="price">{elem.price + " UAH"}</p>
          <p id="weight">{elem.weight}</p>
          <p id="description">{elem.description}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="menu-container">
        <div className="menu-content">
          <WatchLogo></WatchLogo>
            <div className="selects">
              <select id="select" onChange={sortPosition}>
                <option value="allMenu">All menu</option>
                <option value="burgers">Burgers</option>
                <option value="salads">Salads</option>
                <option value="deserts">Deserts</option>
                <option value="dish">Dish</option>
              </select>
          </div>
          <div className="menu">
            {allProducts.map((elem) => renderCards(elem))}
          </div>
        </div>
      </div>
      <MapPage></MapPage>
    </>
  );
}

export default Menu;
