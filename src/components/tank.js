import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./tank.css";

function Tank(props) {
  return (
    <div>
      <Container fluid>
        <Row className="allTanks">
          <Col className="tankDisplay">{props.beer.tank}</Col>
          <Col className="beerName">Name: {props.beer.name}</Col>
          <Col className="style">Style: {props.beer.style}</Col>
          <Col className="pH">pH: {props.beer.gravity}</Col>
          <Col className="fermStatus">Fermentation: {props.beer.fermStatus}</Col>
          <Col>
            <button onClick={props.onClick}>Update Product</button>
          </Col>
          <br></br>
        </Row>
      </Container>
    </div>
  );
}

export default Tank;
