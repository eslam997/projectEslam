const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({ 
    name:{
        type: String,
        required : [true , "name should be written "]
    } ,
    email:{
        type: String,
        required : [true , "email should be written "],
        unique: true,
        validate:[validator.isEmail,"email is invalid" ]
    } ,
    password:{
        type: String,
        required : [true , "Password should be written "],
        unique: true,
       
    } ,
    role:{
        type: String,
        default:"user"
    } ,
});
module.exports =mongoose.model("users",userSchema)