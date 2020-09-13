import React from "react";
import Logo from "./buttons-icons/Logo";
import Search from "./buttons-icons/Search";
import Cart from "./buttons-icons/Cart";
import Twitter from "./buttons-icons/Twitter";
import Facebook from "./buttons-icons/Facebook";
import Instagram from "./buttons-icons/Instagram";
import Snapchat from "./buttons-icons/Snapchat";
import Sun from "./buttons-icons/Sun";
import Moon from "./buttons-icons/Moon";

function SVGComponent(props) {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />;
    case "search":
      return <Search {...props} />;
    case "cart":
      return <Cart {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "facebook":
      return <Facebook {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "snapchat":
      return <Snapchat {...props} />;
    case "moon":
      return <Moon {...props} />;
    case "sun":
      return <Sun {...props} />;
    default:
      return;
  }
}

export default SVGComponent;
