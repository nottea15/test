import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  description: {
    type: String,
    required: true,
  },
  date: { type: String, default: new Date().toLocaleString() },
});

export default mongoose.model("Comment", CommentSchema);
