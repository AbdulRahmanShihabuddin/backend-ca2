import mongoose from "mongoose";

const login = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Login = mongoose.model("Login",login)
export default Login