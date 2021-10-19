import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;

// ABOUT US BANNER INTEGRATED BELOW

// import React from "react";
// import aboutUsBanner from '../../assets/about-us.jpg';

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
//     >
//       <img src={ aboutUsBanner } alt="" />
//     </div>
//   );
// }

// export default Jumbotron;