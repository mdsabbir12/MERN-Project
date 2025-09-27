import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:false},
    email: {type: String, required:true},
    password: { type: String, required: true }
})

const userModel= mongoose.models.user || mongoose.model('user',userSchema)

export default userModel