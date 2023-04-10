const crearUsuario = (req, res) => {
    res.status(200).json({
        ok:true,
        msg: "usuario creado"
    })
}

module.exports = crearUsuario