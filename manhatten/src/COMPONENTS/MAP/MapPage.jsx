import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import WatchLogo from "../WATCHLOGO/WatchLogo";
const MapPage = ({ google }) => {
  const MARKER = {
    lat: 50.449552630096,
    lng: 30.525386631489,
  };

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="content-footer">
          <WatchLogo></WatchLogo>
          <h1>CONTACTS</h1>
          <div className="contacts-container">
            <div className="contacts">
              <div className="top">
                <p id="one">Address</p>
                <p id="two">123 Willow Streat, Oakville Heights, Surrey, UA</p>
                <p id="three">Telephone</p>
                <p id="four">+380-343-434-5</p>
                <p id="five">Work time</p>
                <p id="six">Every day 12:00 - 06:00</p>
              </div>
              <div className="bottom">
                <p id="one">Manager</p>
                <p id="two">Slyvka Marko</p>
                <p id="three">ART-MANAGER</p>
                <p id="four">Cherniuk Oleksandra</p>
              </div>
            </div>
            <div className="map">
              <Map google={google} zoom={17} initialCenter={MARKER}>
                <Marker position={MARKER} />
              </Map>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2022. All rights reserved.</p>
            <p>Designed by Slyvka Marko</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyARV5i3XmmiyCxEZPxLbkRFktxiHdXRJyY",
})(MapPage);
