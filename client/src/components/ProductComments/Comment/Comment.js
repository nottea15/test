import React from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../redux/actions";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComment(comment._id));
  };
  return (
    <div
      className="comment"
      key={comment._id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
        background: "white",
        borderRadius: 20,
        margin: "0 auto",
      }}
    >
      <h3>{comment.description}</h3>
      <p style={{ fontSize: "10px", color: "gray" }}>
        Wtitten at: {comment.date}
        <button onClick={handleDelete}>delete</button>
      </p>
    </div>
  );
};

export default Comment;
