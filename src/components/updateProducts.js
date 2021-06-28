import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateProducts(props) {

    const [data, setData] = useState([]);
    const [updateGravity, setUpdateGravity] = useState([]);
    const [updtateTemp, setUpdateTemp] = useState([]);
    const [updtatePH, setUpdatePH] = useState([]);
    const [updateNotes, setUpdateNotes] = useState([]);
    const [updateAdditions, setUpdateAdditions] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // useEffect(() => {
    //     axios.put('https://localhost:5000/api/products/id')
    //     .then(res => {
    //         const resData = res.data
    //         setData(resData);
    //     })
    // }, []);

    // function findPackageStatus(){
    //     let filteredProducts = data.filter(products => products.packageStatus === 'unpackaged')
    //     setUnPackagedProducts(filteredProducts)
        
    // };
    

    return (
        <div className='updateProducts'>
            <form onSubmit={handleSubmit}>
                <label>
                    Gravity:
                    <input type="text" value={updateGravity} onChange={event => setUpdateGravity(event.target.value)}></input>
                </label>
                <label>
                    Temperature:
                    <input type="text" value={updtateTemp} onChange={event => setUpdateTemp(event.target.value)}></input>
                </label>
                <label>
                    pH:
                    <input type="text" value={updtatePH} onChange={event => setUpdatePH(event.target.value)}></input>
                </label>
                <label>
                    Notes:
                    <input type="text" value={updateNotes} onChange={event => setUpdateNotes(event.target.value)}></input>
                </label>
                <label>
                    Additions:
                    <input type="text" value={updateAdditions} onChange={event => setUpdateAdditions(event.target.value)}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default UpdateProducts;