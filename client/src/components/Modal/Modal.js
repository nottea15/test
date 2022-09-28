import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const AddModal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal" id="modal">
      <div className="modal-content">{props.children}</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default AddModal;
