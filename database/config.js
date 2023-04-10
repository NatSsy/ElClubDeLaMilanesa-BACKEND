const mongoose = require("mongoose")

const ConexionDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_BACK)
        console.log("DB conectado")
    }catch (error){
        console.log(error)
        throw new Error("No se puedo inicializar la base de datos")
    }
}
module.exports ={ConexionDB}