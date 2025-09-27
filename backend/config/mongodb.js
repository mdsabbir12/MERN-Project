import mongoose from "mongoose";


const connectDB = async ()=>{
    mongoose.connection.on('connected',()=> {
        console.log("MongoDB Connection Sucessfully")
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/form`)
}

export default connectDB