import React from "react";
import posts from "../DATA/posts";
import WatchLogo from "../WATCHLOGO/WatchLogo";
import { useNavigate } from "react-router-dom";
import MapPage from "../MAP/MapPage";

function Posters() {
  const navigation = useNavigate();
  return (
    <>
    <div className="posters-container">
      <div className="posters-content">
        <WatchLogo />
        <h1>POSTERS</h1>
        <div className="posters">
          {posts.map((elem, index) => {
            return (
              <div key={elem.id} className="poster" onClick={()=>navigation(`/poster/${elem.id}`)}>
                <img src={elem.photo} alt="#" />
                <div className="info">
                  <p id="date">{elem.date}</p>
                  <p id="title">{elem.title}</p>
                  <p id="price">{elem.price}$</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <MapPage></MapPage>
    </>
  );
}

export default Posters;
