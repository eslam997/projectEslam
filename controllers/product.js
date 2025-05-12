const productModel = require("../models/productModel");

const getProducts = async (req, res) => {
  const products = await productModel.find({});
  res.status(200).json({ data: products });
};


const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findById(id);
  if (!product) {
    return res.status(404).json({ 
      status:401,
      data:{ data:null, message: "Product not found" }}
     );
  }
  return res.status(200).json({ 
    status:200,
    data:{ data:product, message: "Product " }}
   );
};


const addProduct = async (req, res) => {
  const { title, description, price, image,Type } = req.body;

  if (!title || !description || !price || !image || !Type) {
    return res.status(400).json({
        status:400, 
       data:{data:null ,message: "Missing product "} });
  }

  const newProduct = new productModel({
    title, description, price, image,Type
  });

  await newProduct.save();

  return res.status(201).json({
    status:201, 
   data:{data:newProduct ,message: "Product added successfully "} });
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, image, Type } = req.body;

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { title, description, price, image, Type },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ 
        status: 404, 
        data: { data: null, message: "Product not found" } 
      });
    }

    return res.status(200).json({ 
      status: 200, 
      data: { data: updatedProduct, message: "Product updated successfully" } 
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ 
      status: 500, 
      data: { data: null, message: "Server error while updating product" } 
    });
  }
};


module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
};
