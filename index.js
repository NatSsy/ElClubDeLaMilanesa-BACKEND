const express = require('express')
require('dotenv').config()
const app = express()

//lectura y parseo del body
app.use(express.json())

//directorio publico
app.use(express.static("public"))

//routes
app.use("/auth", require("./routes/auth"))


//llamar al servidor
app.listen( process.env.PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${process
    .env.PORT}`)
})