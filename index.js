const express = require('express')
const { ConexionDB } = require('./database/config')
require('dotenv').config()
const app = express()
const cors = require("cors")

//lectura y parseo del body
app.use(express.json())

ConexionDB()

app.use(cors())

//directorio publico
app.use(express.static("public"))

//routes
app.use("/auth", require("./routes/auth"))


//llamar al servidor
app.listen( process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${process
    .env.PORT}`)
})