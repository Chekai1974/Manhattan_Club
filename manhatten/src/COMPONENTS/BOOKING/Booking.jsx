import React from "react";
import emailjs from "@emailjs/browser";
import posts from "../DATA/posts";
import { useState } from "react";
import done from "../../IMAGES/done.png";
import { useRef } from "react";
import MapPage from "../MAP/MapPage";
import { useNavigate } from "react-router-dom";
function Booking() {
  const [selected, setSelected] = useState(null);
  const [object, setObj] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState("")
  const navigation = useNavigate();

  function setEvent(obj) {
    setSelected(obj.id);
    setObj(`${obj.id} ${obj.title}`);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (object === e.target.obj.value) {
      emailjs
        .sendForm(
          "service_agzc31x",
          "template_2egrwlm",
          form.current,
          "CNHbhDqcMZqmz4B-v"
        )
        .then(
          setOpen("open"),
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
          setTimeout(() => {
            navigation("/");
          },2800)
        );
      form.current.reset();
      setSelected("");
      setObj("");
    } else {
      form.current.reset();
      setObj("");
      setSelected("");
      setError("show");
    }
  };

  return (
    <>
      <div className="booking-container">
        <div className="booking-content">
          <div className="form">
            <div className={`thanks ${open}`}>
              <h1>Thanks, your order accepted</h1>
              <span>✓</span>
            </div>
            <div className={`error ${error}`}>
              <p className="close" onClick={() => setError("")}>
                X
              </p>
              <h1>Oops...</h1>
              <p>
                Looks like something went wrong. Please try again now, but do
                not change the EVENT input, and double-check all entered data
              </p>
            </div>
            <form onSubmit={sendEmail} ref={form}>
              <p>Full Name</p>
              <input type="text" name="user_name" required />
              <p>Telephone</p>
              <input type="text" name="user_tel" required />
              <p>Email</p>
              <input type="text" name="user_email" required />
              <p>
                Event <span>(select poster)</span>
              </p>
              <input type="text" name="obj" defaultValue={object} required />
              <p>Message</p>
              <textarea name="message" id="" cols="40" rows="10"></textarea>
              <button className="btn" type="submit">
                SEND
              </button>
            </form>
          </div>
          <div>
            <h1>Select an event</h1>
            <div className="posters">
              <div className="posters">
                {posts.slice(0, 4).map((elem, index) => {
                  return (
                    <div
                      key={elem.id}
                      className="poster"
                      onClick={() => setEvent(elem)}
                    >
                      <img src={elem.photo} alt="#" className="elem" />
                      <img
                        src={done}
                        alt=""
                        className={`done ${
                          selected === elem.id ? "selected" : ""
                        }`}
                      />
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
        </div>
      </div>
      <MapPage />
    </>
  );
}

export default Booking;
