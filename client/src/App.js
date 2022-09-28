import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
