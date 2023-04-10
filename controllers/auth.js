const Usuario = require("../model/usuarioModel");
const bcrypt = require("bcrypt")

const crearUsuario = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email })


        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: "El email es invalido o ya esta en uso"
            })
        }

        usuario = new Usuario(req.body)

        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)

        await usuario.save()

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            rol: usuario.rol
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Contactarse con el administrador"
        })
    }
}


const loginUsuario = async (req, res) => {
    const { email, password } = req.body
    try {
        const usuario = await Usuario.findOne({ email })

        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:"El email o contraseña es invalido"
            })
        }
        const validar constraseña =b
    } catch (error) {

    }
    res.status(200).json({
        ok: true,
        msg: "usuario logeado"
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
};