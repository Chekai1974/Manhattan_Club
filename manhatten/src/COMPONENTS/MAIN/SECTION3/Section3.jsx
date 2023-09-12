import React from "react";
import WatchLogo from "../../WATCHLOGO/WatchLogo";
import gallery2 from "../../DATA/gallery_imgs/gallery2.png";
import { useNavigate } from "react-router-dom";

function Section3() {
  const navigation = useNavigate();
  function goToMore() {
    navigation("/featurepage");
  }
  return (
    <section className="section3">
      <div className="section3-container">
        <div className="section3-content">
          <div className="grid-boxes">
            <div className="box1">
              <WatchLogo />
              <h1>Banquets</h1>
              <p id="text-boxes">
                Quam massa pretium et venenatis. Fringilla sagittis, arcu massa,
                in sem viverra consequat. Tempus sed est interdum eget nisi, nec
                fames. Eget amet hac varius aliquam. Mattis egestas suspendisse
                convallis eu arcu et aliquet. <br /> Porttitor risus sociis
                vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac
                leo sit posuere vulputate sed morbi. Donec gravida at turpis sed
                pulvinar. A nibh non consectetur morbi in arcu, in pellentesque
                mauris. <br />
                Eu sodales netus faucibus interdum interdum platea massa
                egestas. Facilisis donec gravida pretium diam semper at id
                eleifend.
              </p>
              <button className="btn-more" onClick={() => goToMore()}>
                More
              </button>
            </div>

            <img src={gallery2} alt="gallery2" />

            <div className="box2">
              <WatchLogo />
              <h1>Tourists</h1>
              <p id="text-boxes">
                Quam massa pretium et venenatis. Fringilla sagittis, arcu massa,
                in sem viverra consequat. Tempus sed est interdum eget nisi, nec
                fames. Eget amet hac varius aliquam. Mattis egestas suspendisse
                convallis eu arcu et aliquet. <br /> Porttitor risus sociis
                vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac
                leo sit posuere vulputate sed morbi. Donec gravida at turpis sed
                pulvinar. A nibh non consectetur morbi in arcu, in pellentesque
                mauris. <br />
                Eu sodales netus faucibus interdum interdum platea massa
                egestas. Facilisis donec gravida pretium diam semper at id
                eleifend.
              </p>
              <button className="btn-more" onClick={() => goToMore()}>
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
