import React, { useState, useEffect }from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Tank(props) {



    return (
        <div>
            <Container fluid>
                <Row>
                    <Col>{props.tankName}</Col>
                    <Col>{props.beerName}{props.beerStyle}</Col>
                    <Col>{props.currentGravity}</Col>
                    <Col>{props.fermentationStatus}</Col>
                </Row>
                <Row>
                    <Col>Tank 2</Col>
                    <Col>Beer name and style</Col>
                    <Col>Gravity</Col>
                    <Col>Status</Col>
                </Row>
                <Row>
                    <Col>Tank 3</Col>
                    <Col>Beer name and style</Col>
                    <Col>Gravity</Col>
                    <Col>Status</Col>
                </Row>
                <Row>
                    <Col>Tank 4</Col>
                    <Col>Beer name and style</Col>
                    <Col>Gravity</Col>
                    <Col>Status</Col>
                </Row>
            </Container>
        </div>
    );
    
}