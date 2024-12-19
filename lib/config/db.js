import mongoose from "mongoose";


 export const ConnectDb = async () => {
  await mongoose.connect('mongodb+srv://kavrelibikash:waiba2425$@cluster0.wtute.mongodb.net/blog-app')
  console.log("DB Connected");
  
}