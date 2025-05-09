const express = require("express")
const { getUsers ,getSingleUser} = require("../controllers/users")
const { register } = require("../controllers/auth")
const { login } = require("../controllers/auth")
const routerUsers = express.Router()



routerUsers.route("/").get(getUsers)
routerUsers.route("/register").post(register)
routerUsers.route("/login").post(login)
routerUsers.get("/:id", getSingleUser);
module.exports = routerUsers