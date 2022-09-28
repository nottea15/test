import { Router } from "express";
import {
  addComment,
  getProductComments,
  deleteComment,
} from "../controllers/comment.js";

const router = new Router();

router.post("/:id", addComment);

router.get("/:productId", getProductComments);

router.delete("/:id", deleteComment);

export default router;
