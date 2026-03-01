 import mongoose from "mongoose";

 const MobileSchema = new mongoose.Schema(
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

 const MobileModel =
   mongoose.models.Mobile || mongoose.model("Mobile", MobileSchema);

 export default MobileModel;
