import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log("Couldn't connect to server")
    }
}
export default connectDB