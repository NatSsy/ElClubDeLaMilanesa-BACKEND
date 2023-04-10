const express = require ("express");
const {crearUsuario, loginUsuario} = require("../controllers/auth");

const routerAuth = express.Router()

routerAuth.post("/new", crearUsuario)
routerAuth.post("/", loginUsuario )



module.exports= routerAuth;