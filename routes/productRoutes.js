const express = require("express");
const routerProducts = express.Router();
const {
  getProducts,
  getSingleProduct,
  addProduct,
} = require("../controllers/product");


routerProducts.get("/", getProducts);
routerProducts.get("/:id", getSingleProduct);
routerProducts.post("/", addProduct);

module.exports = routerProducts;
