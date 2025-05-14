const express = require("express");
const routerProducts = express.Router();
const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");


routerProducts.get("/", getProducts);
routerProducts.get("/:id", getSingleProduct);
routerProducts.put("/:id", updateProduct);
routerProducts.delete("/:id", deleteProduct);
routerProducts.post("/", addProduct);


module.exports = routerProducts;
