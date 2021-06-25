import React, { useState, useEffect }from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Tank from '../tank';
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from '@testing-library/react';


export default function Home() {

    const [data, setData] = useState([]);
    const [unpackagedProducts, setUnPackagedProducts] = useState([]);
    const [fillTank, setFillTank] = useState([]);
    const [tankName, setTankName] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
        .then(res => {
            const resData = res.data
            setData(resData);
            findPackageStatus()
        })
    }, );

    function findPackageStatus(){
        let filteredProducts = data.filter(products => products.packageStatus === 'unpackaged')
        setUnPackagedProducts(filteredProducts)
        
    };

    function renderTanks(){
        let showTank = unpackagedProducts.map(product => (
            <Tank 
                beer={product}           
            />
        ))
        return (
            showTank
        )
    };

    // function fillTankOne() {
    //     let tankOne = unpackagedProducts.filter(unpackagedBeers => unpackagedBeers.tank === 'tank 1')
    //     setFillTank(tankOne)
    // };

    // function fillTankTwo() {
    //     let tankTwo = unpackagedProducts.filter(unpackagedBeers => unpackagedBeers.tank === 'tank 2')
    //     setFillTank(tankTwo)
    // };

    // function fillTankThree() {
    //     let tankThree = unpackagedProducts.filter(unpackagedBeers => unpackagedBeers.tank === 'tank 3')
    //     setFillTank(tankThree)
    // };

    // function fillTankFour() {
    //     let tankFour = unpackagedProducts.filter(unpackagedBeers => unpackagedBeers.tank === 'tank 4')
    //     setFillTank(tankFour)
    // };

    // function findBeerName() {
    //     let beerName = unpackagedProducts.filter( =>)
    // };

    function findBeerStyle() {

    };

    function findCurrentGravity() {

    };

    function updateFermentationStatus() {

    };

        return (
            <div className='home'>
                {renderTanks()}
            </div>
        )    
}