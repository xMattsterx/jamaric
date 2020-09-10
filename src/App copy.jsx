import React from "react";
import "./App.css";
import Icon from "./components/SVG/SVG";
import Carousel from "./components/Carousel_elastic";

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="hamburger">ham</div>
        <div className="logo">
          <Icon name="logo" width={132} height={35} />
        </div>
        <div className="search">
          <Icon
            name="search"
            width={19.6}
            height={19.6}
            fill={"currentColor"}
          />
        </div>
        <div className="cart">
          <Icon name="cart" width={19.6} height={17.42} fill={"currentColor"} />
        </div>
      </div>
      <div className="showcase">
        New Arrivals
        <Carousel name="showcase" />
      </div>

      <div className="main">
        Collection
        <Carousel name="main" />
      </div>
      <div className="footer">
        <p>
          <br></br>
          About us <br></br>
          <br></br>
          Support<br></br>
          <br></br>
          Get in touch<br></br>
          Copyright
        </p>
      </div>
    </div>
  );
}

export default App;
