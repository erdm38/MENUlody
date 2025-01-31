import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://asderfop38:menulody123@cluster0.6tllunk.mongodb.net/MenuLody').then(()=>console.log("DB CONNECTED"));
}