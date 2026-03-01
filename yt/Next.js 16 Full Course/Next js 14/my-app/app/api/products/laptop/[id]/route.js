
import { NextResponse } from "next/server";
 import LaptopModel from "../../../../utils/models/laptop";
import { DBconnection } from "../../../../utils/config/db";
import mongoose from "mongoose";
 
 

// GET single laptop

 export async function GET(request, context) {
   try {
     await DBconnection();

     // ✅ params is a Promise in Next.js 14+
     const params = await context.params;
     const { id } = params;

     // ✅ validate ObjectId
     if (!mongoose.Types.ObjectId.isValid(id)) {
       return NextResponse.json(
         { message: "Invalid laptop id" },
         { status: 400 }
       );
     }

     const productRecord = await LaptopModel.findById(id);

     if (!productRecord) {
       return NextResponse.json(
         { message: "Laptop not found" },
         { status: 404 }
       );
     }

     return NextResponse.json(productRecord);
   } catch (error) {
     console.error(error);
     return NextResponse.json({ error: error.message }, { status: 500 });
   }
 }


 
// 🗑️ DELETE laptop
export async function DELETE(request, context) {
  try {
    await DBconnection();

    const params = await context.params;
    const { id } = params;

    // validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid laptop id" },
        { status: 400 }
      );
    }

    const deletedLaptop = await LaptopModel.findByIdAndDelete(id);

    if (!deletedLaptop) {
      return NextResponse.json(
        { message: "Laptop not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Laptop deleted successfully",
      laptop: deletedLaptop,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
