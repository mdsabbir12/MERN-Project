import userModel from "../models/userModules.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from 'validator'

const createToken= (id)=>{
    return jwt.sign({id},process.env.JWT_SCERET)
}


const loginUser= async (req, res)=>{
   try {
    const {email,password}= req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.json({
            success:false,
            message:"User Not found"
        })
    }

    const ismatch= await bcrypt.compare(password, user.password)
    if(ismatch){
        const token = createToken(user._id)
        res.json({success:true,message:"login Sucessfull",token})
    }
    else{
        res.json({success:false,message:"Incorrect Password"})
    }
   } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})

   }
}

const registerUser = async (req, res)=>{
   try {
     const {firstname,lastname,email,password} = req.body
    const axists = await userModel.findOne({email})

    if(axists){
        res.json({success:false,message:"User alredy axist"})
    }

    if(!validator.isEmail(email)){
        return res.json({success:true,message:"Email is Invalid"})
    }

    if(password.length <8 ){
        return res.json({success:false,message:"Password must be 8 Character"})
    }

    const salt= await bcrypt.genSalt(10)
    const hashedpassword= await bcrypt.hash(password,salt)

    
    const newUser= new userModel({
        firstname,lastname, email, password:hashedpassword
    })

    const user = await newUser.save();
    const token = createToken(user._id)
    res.json({success:true,message:"Registration Sucessfull",token})
   } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
   }

}
export {loginUser,registerUser}