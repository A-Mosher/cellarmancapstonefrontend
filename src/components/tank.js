import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './tank.css';

function Tank(props) {

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="tankDisplay">{props.beer.tank}</Col>

                    <Col>{props.beer.name}{props.beer.style}</Col>

                    <Col>{props.beer.gravity}</Col>

                    <Col>{props.beer.fermStatus}</Col>

                </Row>
            </Container>
        </div>
    );
    
}

export default Tank;