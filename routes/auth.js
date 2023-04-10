const express = require ("express");
const crearUsuario = require("../controllers/auth");
const routerAuth = express.Router()

routerAuth.post("/new", crearUsuario)



module.exports= routerAuth;