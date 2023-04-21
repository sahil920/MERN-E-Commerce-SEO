import mongoose from "mongoose";
import colors from "colors"
const connectDB = async () =>{
    try {
        const conn = await  mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected with thwe database ${conn.connection.host}`.bgBlack.magenta.white)
    } catch (error) {
        console.log(`error in Mongodb ${error}`.bgRed.white)
    }
}

export default connectDB;