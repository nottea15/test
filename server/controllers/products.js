import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  try {
    const { name, count, height, width, weight } = req.body;
    console.log(req.file);

    const newProduct = new Product({
      name,
      count,
      size: { height: height, width: width },
      weight,
      imageUrl: req.file.filename,
    });
    await newProduct.save();
    res.json({
      newProduct,
      message: "success",
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return res.json({
        message: "No products",
      });
    }
    res.json({ products });
  } catch (error) {
    res.json({ message: error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.json({
        message: "No product",
      });
    }
    res.json({ product });
  } catch (error) {
    res.json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    const products = await Product.find();
    res.json({ products });
  } catch (error) {}
};

export const editProduct = async (req, res) => {
  try {
    const { name, count, width, height, weight } = req.body;
    const product = await Product.findById(req.params.id);
    if (req.files) {
      product.imageUrl = req.file.filename;
    }

    product.name = name;
    product.count = count;
    product.size.width = width;
    product.size.height = height;
    product.weight = weight;

    await product.save();

    res.json(product);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
