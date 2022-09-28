import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import AddModal from "../components/Modal/Modal";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../redux/actions";
import { addProduct } from "../redux/actions";
import "./ProductList.css";

const ProductsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [sortSetting, setSortSetting] = useState("alphabet");
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products?.products);

  const hideModal = () => {
    setShowModal(false);
  };

  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [showModal]);

  useEffect(() => {
    if (sortSetting == "alphabet") {
      products?.sort((a, b) => {
        return b.count - a.count;
      });
    } else {
      products?.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [sortSetting]);

  const renderedProducts = products?.map((product) => {
    return (
      <ProductCard key={product._id} product={product} hideModal={hideModal} />
    );
  });

  return (
    <div className="container">
      {showModal && (
        <AddModal>
          <AddProductForm hideModal={hideModal} submit={addProduct} />
        </AddModal>
      )}
      <div class="dropdown">
        <button class="dropbtn">Sort</button>
        <div class="dropdown-content">
          <a href="#" onClick={() => setSortSetting("alphabet")}>
            Alphabet
          </a>
          <a href="#" onClick={() => setSortSetting("by count")}>
            By count
          </a>
        </div>
      </div>
      <div
        className="listWrapper"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {renderedProducts}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button-17" onClick={() => setShowModal(true)}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
