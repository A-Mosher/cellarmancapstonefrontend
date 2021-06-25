import React, { useState, useEffect }from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Tank from '../tank';


export default function Home() {

    const [data, setData] = useState([]);
    const [packageStatus, setPackageStatus] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
        .then(res => {
            console.log(res.data)
            const resData = res.data
            setData(resData);
        })
    }, []);

    function findPackageStatus(){
        let filteredProducts = data.filter(products => products.packageStatus === 'unpackaged')
        setPackageStatus(filteredProducts)
    };

    function findTankName() {
        
    };

    function findBeerName() {

    };

    function findBeerStyle() {

    };

    function findCurrentGravity() {

    };

    function updateFermentationStatus() {

    };

    return (
        <div className='home'>
            <Container fluid>
                <Row>
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
    )
}