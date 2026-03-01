 import mongoose from "mongoose";

 const LaptopSchema = new mongoose.Schema(
   {
     title: {
       type: String,
       required: true,
       unique: true,
     },
     model: {
       type: String,
       required: true,
       unique: true,
     },
     price: {
       type: Number,
       required: true,
     },
   },
   {
     timestamps: true,
   }
 );

 const LaptopModel =
   mongoose.models.Laptop || mongoose.model("Laptop", LaptopSchema);

 export default LaptopModel;
