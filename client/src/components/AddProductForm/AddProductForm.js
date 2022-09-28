import React, { useState } from "react";
import "./AddProductForm.css";
import { useDispatch } from "react-redux";

const AddProductForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [count, setCount] = useState(props.count ? props.count : "");
  const [width, setWidth] = useState(props.width ? props.width : "");
  const [height, setHeight] = useState(props.height ? props.height : "");
  const [weight, setWeight] = useState(props.weight ? props.weight : "");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const data = new FormData();
    data.append("name", name);
    data.append("count", Number(count));
    data.append("width", Number(width));
    data.append("height", Number(height));
    data.append("weight", weight);
    data.append("imageUrl", img);
    console.log(props.id);
    dispatch(props.submit(data, props.id));
    console.log(data);
    props.hideModal();
  };
  return (
    <div className="form">
      <h1 style={{ textAlign: "center" }}>Product</h1>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="formWrapper">
          <input
            required
            accept="image/*"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <input
            required
            placeholder="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            placeholder="count"
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <div className="size-inputs">
            <input
              required
              className="sizeInput"
              placeholder="width"
              type="text"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <input
              required
              className="sizeInput"
              placeholder="height"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <input
            required
            placeholder="weight"
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <hr />
          <div className="actions">
            <button
              onClick={handleSubmit}
              type="submit"
              className="action-button"
              disabled={!name || !width || !height || !weight || !count}
            >
              Save
            </button>
            <button
              type="button"
              onClick={props.hideModal}
              className="action-button"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
