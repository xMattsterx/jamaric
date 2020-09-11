import React from "react";
import "./App.css";
import SVGComponent from "./components/SVGComponent";
import Swiper from "./components/Swiper";
import Navbar from "./components/navigation/NavBar";
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
          <SVGComponent name="logo" width={130} height={50} />
        </div>
        <div className="cart">
          <SVGComponent name="cart" width={19.6} height={17.42} />
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
        <div className="socialMedia">social media</div>
        <div className="copyright">Copyright</div>
      </div>
    </div>
  );
}

export default App;
