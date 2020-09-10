import React from "react";
import "./App.css";
import Icon from "./components/SVG/SVG";
import Swiper from "./components/Swiper";
import Navbar from "./components/Navigation/NavBar";
import "./components/Accordion.css";

import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="hamburger">
          <Navbar />
        </div>
        <div className="logo">
          <Icon name="logo" width={135} height={50} />
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
        <Swiper />
      </div>
      <div className="main">
        <Swiper />
      </div>
      <div className="footer">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              About us
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>We are Jamaric</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Support
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Support us</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        Copyright
      </div>
    </div>
  );
}

export default App;
