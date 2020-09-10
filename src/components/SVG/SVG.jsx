import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";

function Icon(props) {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />;
    case "search":
      return <Search {...props} />;
    case "cart":
      return <Cart {...props} />;
    default:
      return;
  }
}

export default Icon;
