import mongoose from "mongoose";
 
// const MONGO_URI = process.env.MONGO_URI;

export default function dbconnect() {
   try{
      mongoose.connect(process.env.MONGO_URI);
      console.log("Mongodb connected");
   }catch(error){
      console.log("Database not connected",error);
   }
}