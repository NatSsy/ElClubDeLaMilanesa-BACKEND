const express = require("express");
const { crearUsuario, loginUsuario } = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const routerAuth = express.Router()

routerAuth.post("/new",
    [
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El correo es obligatorio").not().isEmpty().isEmail(),
        check("password", "La constraseña sebe ser mayor a 5 caracteres").isLength({ min: 5, }),
        validarCampos,
    ],
    crearUsuario
);
routerAuth.post("/",
    [
        
        check("email", "Contraseña o usuario incorrecto").not().isEmpty().isEmail(),
        check("password", "Contraseña o usuario incorrecto").not().isEmpty(),
        validarCampos,
    ]
    , loginUsuario)



module.exports = routerAuth;