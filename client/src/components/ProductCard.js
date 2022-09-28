import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux/actions";
import AddModal from "./Modal/Modal";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <AddModal>
          <div className="delete-window" style={{ margin: "20px" }}>
            <h1>Warning</h1>
            <hr />
            <p>Are you sure You want to delete {product.name}</p>
            <hr />
            <div className="actions">
              <button
                onClick={() => handleDelete(product._id)}
                className="action-button"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="action-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </AddModal>
      )}
      <a
        onClick={(e) => {
          e.preventDefault();
          navigate(`/${product._id}`);
        }}
        className="card"
      >
        <img
          src={`http://localhost:3002/${product.imageUrl}`}
          alt="item"
          style={{ maxWidth: "300px" }}
        />
        <h1>{product.name}</h1>
        <p className="count">In Stock {product.count}</p>
        <p>
          <button
            onClick={(e) => {
              setShowModal(true);
              e.stopPropagation();
            }}
          >
            Delete
          </button>
        </p>
      </a>
    </>
  );
};

export default ProductCard;
