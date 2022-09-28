import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductComments.css";
import api from "../../apis/api";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment/Comment";
import { addComment } from "../../redux/actions";

const ProductComments = () => {
  const [commentValue, setCommentValue] = useState("");
  const { id } = useParams();
  const { comments } = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(comments);

  const postComment = () => {
    dispatch(addComment(commentValue, id));
  };

  const renderedComments = comments?.map((comment) => {
    return <Comment key={comment._id} comment={comment} />;
  });

  return (
    <div className="comment-container">
      <h1 style={{ textAlign: "center" }}>Comments</h1>
      <div className="comment-input">
        <input
          type="text"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <button
          disabled={!commentValue}
          onClick={postComment}
          className="button-17"
        >
          Submit
        </button>
      </div>
      <hr />
      {renderedComments}
      <hr />
    </div>
  );
};

export default ProductComments;
