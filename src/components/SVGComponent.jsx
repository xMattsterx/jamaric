import React from "react";
import Logo from "./buttons/Logo";
import Search from "./buttons/Search";
import Cart from "./buttons/Cart";

function SVGComponent(props) {
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

export default SVGComponent;
