// ABOUT US BANNER INTEGRATED BELOW

import React from "react";
import AboutUs from '../../assets/about-us.jpg';

function JumbotronAbout({ children }) {
  return (
    <div
    //   style={{ height: 100, clear: "both", paddingTop: 0, textAlign: "center" }}
    >
      <img src={ AboutUs } alt="" />
    </div>
  );
}

export default JumbotronAbout;