import React, { useState, useEffect } from "react";
import axios from "axios";
import Tank from "../tank";
import UpdateProducts from "../updateProducts";

export default function Home(props) {
  const [data, setData] = useState(null);
  const [unpackagedProducts, setUnPackagedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;

    setSelectedProduct({
      ...selectedProduct,
      [name]: value,
    });
  };

  const getAllProducts = async () => {
    await axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const resData = res.data;
        setData(resData);
        findPackageStatus(resData);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = selectedProduct._id;
    delete selectedProduct._id;
    delete selectedProduct.__v;

    setSelectedProduct(null);
    await axios.put(
      `http://localhost:5000/api/products/${id}`,
      selectedProduct
    );

    console.log("Updated!", selectedProduct);
    getAllProducts();
  };
  
  useEffect(() => {
    getAllProducts();
  }, []);

  function findPackageStatus(data) {
    let filteredProducts = data.filter(
      (products) => products.packageStatus === "unpackaged"
    );
    setUnPackagedProducts(filteredProducts);
  }

  function renderTanks() {
    let showTank = unpackagedProducts.map((product) => (
      <Tank
        key={product.tank}
        beer={product}
        onClick={() => setSelectedProduct(product)}
      />
    ));
    return showTank;
  }

  return (
    <div className="home">
      {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
      {data ? renderTanks() : <h1>Loading...</h1>}
      <div>
        <h1>Home</h1>
        <h1>Status: {props.loggedInStatus}</h1>
      </div>

      {selectedProduct && (
        <UpdateProducts
          product={selectedProduct}
          onChange={onChange}
          handleSubmit={handleSubmit}
          close={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
