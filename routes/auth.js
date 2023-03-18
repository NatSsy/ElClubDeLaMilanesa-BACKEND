const express = require ("express")
const routerAuth = express.Router()

routerAuth.post("/new", crearUsuario)



module.exports= routerAuth;