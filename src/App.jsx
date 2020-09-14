import React from "react";
import "./App.css";
import SVGComponent from "./components/SVGComponent";
import Swiper from "./components/Swiper";
import Navbar from "./components/navigation/NavBar";
import "./components/Accordion.css";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Toggle from "./components/buttons-icons/Toggle";
import { ThemeProvider } from "styled-components";
import useDarkMode from "./components/theme/DarkMode";
import { GlobalStyle } from "./components/theme/GlobalStyle";
import { lightTheme, darkTheme } from "./components/theme/Themes";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <div className="app">
          <div className="header">
            <div className="hamburger">
              <Navbar />
            </div>
            <div className="logo">
              <SVGComponent
                name="logo"
                width={130}
                height={50}
                viewBox={"0 45 1400 300"}
              />
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
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Get in touch
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Contact us</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <div className="logo">
              <SVGComponent
                name="logo"
                width={85}
                height={50}
                viewBox={"0 45 1400 300"}
              />
            </div>
            <div className="socialMedia">
              <div className="twitter">
                <SVGComponent name="twitter" width={25} height={25} />
              </div>

              <div className="facebook">
                <SVGComponent name="facebook" width={25} height={25} />
              </div>
              <Toggle theme={theme} toggleTheme={themeToggler} />
              <div className="snapchat">
                <SVGComponent name="snapchat" width={25} height={25} />
              </div>
              <div className="instagram">
                <SVGComponent name="instagram" width={25} height={25} />
              </div>
            </div>
            <div className="copyright">
              &#169; 2020 Jamaric LLC. All Rights Reserved
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
