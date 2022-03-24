import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    //to horizontally and vertically center the image use className="center"(uses flexbox)
    <header className="center">
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
