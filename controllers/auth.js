const crearUsuario = (req, res) => {

const {name, email, password} = req.body;


    res.status(201).json({
        ok:true,
        msg: "usuario creado"
    })
}

const loginUsuario = (req, res) =>{
    res.status(200).json({
        ok: true,
        msg: "usuario logeado"
    })
}

module.exports = {
    crearUsuario, 
    loginUsuario,
};