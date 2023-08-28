import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import posts from "../DATA/posts";
import MapPage from "../MAP/MapPage";
function Poster() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setPost(posts.find((elem) => elem.id === +id));
  }, [id]);
  return (
    <>
      <div className="post-container">
        <div className="post-content">
          <img src={post.photo} alt="#" />
          {/* <img src={curntain} alt="" style={{ position:"absolute", scale:"0.8"}} /> */}
          <div className="info">
            <p id="date">{post.date}</p>
            <p id="title">{post.title}</p>
            <p id="price">{post.price}$</p>
            <p id="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              aspernatur eius possimus consequatur hic tenetur sequi recusandae
              quisquam cum at?
            </p>
          </div>
        </div>
      </div>
      <MapPage></MapPage>
    </>
  );
}

export default Poster;
