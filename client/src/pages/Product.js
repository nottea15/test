import React, { useEffect, useState } from "react";
import { Connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import AddModal from "../components/Modal/Modal";
import ProductComments from "../components/ProductComments/ProductComments";
import { editProduct, fetchProduct, fetchComments } from "../redux/actions";

import "./Product.css";
import "./ProductList.css";

const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(fetchComments(id));
  }, []);

  if (!product) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container">
      {showModal && (
        <AddModal>
          <AddProductForm
            hideModal={() => setShowModal(false)}
            submit={editProduct}
            id={product._id}
            name={product.name}
            count={product.count}
            width={product.size.width}
            height={product.size.height}
            weight={product.weight}
          />
        </AddModal>
      )}
      <div className="product-container">
        <img
          src={`http://localhost:3002/${product.imageUrl}`}
          alt=""
          style={{ width: "300px", height: "300px" }}
        />
        <div className="product-info">
          <div className="product-info-text">
            <h3>Name</h3>
            <h3>{product.name}</h3>
          </div>

          <div className="product-info-text">
            <h3>Count</h3>
            <h3>{product.count}</h3>
          </div>
          <div className="product-info-text">
            <h3>Height</h3>
            <h3>{product.size.height}</h3>
          </div>
          <div className="product-info-text">
            <h3>Width</h3>
            <h3>{product.size.width}</h3>
          </div>
          <div className="product-info-text">
            <h3>Weight</h3>
            <h3>{product.weight}</h3>
          </div>
        </div>
      </div>

      <button className="button-17" onClick={() => setShowModal(true)}>
        Edit
      </button>
      <ProductComments />
    </div>
  );
};

export default Product;
