const express = require("express");
const routerProducts = express.Router();
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
} = require("../controllers/product");


routerProducts.get("/", getProducts);
routerProducts.get("/:id", getSingleProduct);
routerProducts.put("/:id", updateProduct);
routerProducts.post("/", addProduct);

module.exports = routerProducts;
