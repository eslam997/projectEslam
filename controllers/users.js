const userSchema = require("../models/userModel")
const getUsers = async(req ,res )=>{
    const users =await userSchema.find({})
    return res.status(200).json(
        {
        status:200,
        data:{data:users , message:"get users"}
    }
)
}
const getSingleUser = async (req, res) =>{
    const { id } = req.params;
    const user = await userSchema.findById(id);
    return res.status(200).json({
        status: 200,
        data: { data: user, message: "Get single user" },
      });
}

module.exports ={
    getUsers,
    getSingleUser,
}