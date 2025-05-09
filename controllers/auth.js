const userSchema = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register =async(req,res)=>{
        const { name,email , password } = req.body;
      
        if (!name || !email || !password ) {
          return res.status(400).json({
            status: 400,
            data: { data: null, message: "massging data" },
          });
        }
        const checkUser = await userSchema.findOne({email})

        if (checkUser) {
            return res.status(400).json({
              status: 400,
              data: { data: null, message: " user exist" },
            }) }
           const hashPassword = await bcrypt.hash(password, 8)
          const registerUser = await userSchema({
            name,
            email,
            password:hashPassword,
          }) 

          await registerUser.save()

          return res.status(201).json({
            status: 201,
            data: { data: registerUser, message: "User registered successfully" },
          })
        }
        
        const login = async(req,res)=>{
          const { email , password } = req.body;
          if ( !email || !password ) {
            return res.status(400).json({
              status: 400,
              data: { data: null, message: "massging data" },
            });
          }
          const loggedUser = await userSchema.findOne({email})
          if (!loggedUser) {
            return res.status(400).json({
              status: 400,
              data: { data: null, message: " email is invalid" },
            });
          }
          const Match = await bcrypt.compare(password, loggedUser.password);
          if (!Match) {
            return res.status(400).json({
              status: 400,
              data: { data: null, message: "password is incorrect" },
            });
          }
          const token =await jwt.sign({
            email,
            name:loggedUser.name,
            role:loggedUser.role,
            _id:loggedUser._id,
          },process.env.SECRET_KEY)

          return res.status(200).json({
            status: 200,
            data: { token, message: "User login successfully" },
          });
        } 





 module.exports ={
    register,
    login,
}