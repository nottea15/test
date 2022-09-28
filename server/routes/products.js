import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  editProduct,
} from "../controllers/products.js";
import multer from "multer";

const router = new Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
  },
});
const upload = multer({
  storage: storage,
});

router.post("/", upload.single("imageUrl"), addProduct);

router.get("/", getAllProducts);

router.get("/:id", getProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", upload.single("imageUrl"), editProduct);

export default router;
