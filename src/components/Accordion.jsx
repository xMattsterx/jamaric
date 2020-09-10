import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomAccordion(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {props.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default CustomAccordion;
