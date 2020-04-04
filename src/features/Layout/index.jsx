import React from "react";
import logo from "../../assets/react.png"; // Tell webpack this JS file uses this image

const Layout = () => (
  <>
    <div>Layout</div>
    <img src={logo} alt="Logo" />;
  </>
);

export default Layout;
