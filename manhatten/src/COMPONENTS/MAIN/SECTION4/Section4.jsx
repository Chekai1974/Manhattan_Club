import React from "react";
import WatchLogo from "../../WATCHLOGO/WatchLogo";
import dj1 from "../../../IMAGES/dj1.png";
import dj2 from "../../../IMAGES/dj2.png";
import vk from "../../../IMAGES/vk.png";
import tg from "../../../IMAGES/tg.png";
function Section4() {
  return (
    <section className="section4">
      <div className="section4-container">
        <div className="section4-content">
          <div className="title">
            <WatchLogo />
            <h1>Techrider</h1>
          </div>
          <div className="content-container">
            <div className="drops-down">
              <div className="drop1 active-drop">
                <div className="drop-title">
                  <p>LOUDSPEAKER</p>
                  <span className="triangle active-triangle"></span>
                </div>
                <div className="drop-down-content active-drop-content">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
              <div className="drop2 active-drop">
                <div className="drop-title">
                  <p>LOUDSPEAKER</p>
                  <span className="triangle active-triangle"></span>
                </div>
                <div className="drop-down-content active-drop-content">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
              <div className="drop3 active-drop">
                <div className="drop-title">
                  <p>LOUDSPEAKER</p>
                  <span className="triangle active-triangle"></span>
                </div>
                <div className="drop-down-content active-drop-content">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
              <div className="drop4 active-drop">
                <div className="drop-title">
                  <p>LOUDSPEAKER</p>
                  <span className="triangle active-triangle"></span>
                </div>
                <div className="drop-down-content active-drop-content">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
              <div className="drop5 active-drop">
                <div className="drop-title">
                  <p>LOUDSPEAKER</p>
                  <span className="triangle active-triangle"></span>
                </div>
                <div className="drop-down-content active-drop-content">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
              <div className="drop6 active-drop-last">
                <div className="drop-title">
                  <p>LOUDSPEAKER</p>
                  <span className="triangle active-triangle"></span>
                </div>
                <div className="drop-down-content active-drop-content">
                  <ul>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="djs-info">
              <h1>
                Club Sound Engineers <br />
                MANHATTAN
              </h1>
              <div className="djs-cards">
                <div className="djs1">
                  <a href="https://vk.com/feed" target="blank">
                    <img src={dj1} alt="" />
                  </a>
                  <p>Katsrov Dmitro</p>
                  <div className="icons">
                    <a href="https://vk.com/feed" target="blank">
                      <img src={vk} alt="" />
                    </a>
                    <a href="https://web.telegram.org/k/" target="blank">
                      <img src={tg} alt="" />
                    </a>
                  </div>
                </div>

                <div className="djs2">
                  <a href="https://vk.com/feed" target="blank">
                    <img src={dj2} alt="" />
                  </a>
                  <p>Viliam Bender</p>
                  <div className="icons">
                    <a href="https://vk.com/feed" target="blank">
                      <img src={vk} alt="" />
                    </a>
                    <a href="https://web.telegram.org/k/" target="blank">
                      <img src={tg} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
