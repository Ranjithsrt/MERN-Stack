import { NextResponse } from "next/server";
import MobileModel from "@/utils/models/mobile";
import { DBconnection } from "@/utils/config/db";


//  DELETE http://localhost:3000/api/products/mobiles/65a123abc456


/* ================= PUT ================= */
export async function PUT(request, { params }) {
  try {
    await DBconnection();

    const { id } = params;
    const { title, model, price } = await request.json();

    const updatedMobile = await MobileModel.findByIdAndUpdate(
      id,
      { title, model, price },
      { new: true }
    );

    if (!updatedMobile) {
      return NextResponse.json({ error: "Mobile not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Mobile updated successfully", data: updatedMobile },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update mobile" },
      { status: 500 }
    );
  }
}

/* ================= DELETE ================= */
export async function DELETE(request, { params }) {
  try {
    await DBconnection();

    const { id } = params;

    const deletedMobile = await MobileModel.findByIdAndDelete(id);

    if (!deletedMobile) {
      return NextResponse.json({ error: "Mobile not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Mobile deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete mobile" },
      { status: 500 }
    );
  }
}
