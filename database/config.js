const mongoose = require("mongoose")

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_BACK)
    }catch (error){

    }
}