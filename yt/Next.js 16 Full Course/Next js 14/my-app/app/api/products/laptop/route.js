 import { NextResponse } from "next/server";
 import LaptopModel from "../../../utils/models/laptop";
 import { DBconnection } from "../../../utils/config/db";

  

 export async function GET() {
   await DBconnection();

   const laptopData = await LaptopModel.find({});
   return NextResponse.json({ laptops: laptopData });

//    return NextResponse.json({
//      message: "Hello, Laptop!",
//    });
 }

 export async function POST(request) {
   await DBconnection();

   const { title, model, price } = await request.json();

   await LaptopModel.create({
     title,
     model,
     price,
   });

   return NextResponse.json({
     message: "Laptop created successfully",
   });
 }


 