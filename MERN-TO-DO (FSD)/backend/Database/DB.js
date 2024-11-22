import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();


const DB_URL = process.env.DB_URL

const connection = () => {

    const MONGODB_URI = `${DB_URL}`;


    mongoose.connect(MONGODB_URI , { useNewUrlParser : true });

    mongoose.connection.on('connected',()=>{
        console.log("database connected succefully")
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("database disconnected")
    })

    mongoose.connection.on('error',(error)=>{
        console.log("error while connecting with database",error.message)
    })
}

export default connection;