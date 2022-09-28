import Comment from "../models/Comment.js";
import Product from "../models/Product.js";

export const addComment = async (req, res) => {
  try {
    const { description } = req.body;
    const product = await Product.findById(req.params.id);
    console.log(product);

    const newComment = new Comment({
      description,
      productId: req.params.id,
    });
    await newComment.save();
    try {
      await Product.findByIdAndUpdate(req.params.id, {
        $push: { comments: newComment },
      });
      res.json({
        newComment,
        message: "success",
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    res.json({ message: error });
  }
};
export const getProductComments = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    const commentsList = await Promise.all(
      product.comments.map((comment) => {
        return Comment.findById(comment);
      })
    );
    res.json(commentsList);
  } catch (error) {
    res.json({ message: "error" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    await Product.findByIdAndUpdate(comment.productId, {
      $pull: { comments: req.params.id },
    });
    res.json(comment);
  } catch (error) {}
};
