import { NextResponse } from "next/server";
import MobileModel from "../../../utils/models/mobile";
import { DBconnection } from "../../../utils/config/db";

 
// const ConnectDB = async () => {
//     await DBconnection();
// }
// ConnectDB();

// GET Method - http://localhost:3000/api/products/mobiles

export async function GET() {
  const mobileData = await MobileModel.find({});
  return NextResponse.json({ mobiles: mobileData });
  //   return NextResponse.json({
  //     mobiles : "all mobiles"
  //   });
};

// POST Method - http://localhost:3000/api/products/mobiles

export async function POST(request) {
 // await DBconnection();
  const { title, model, price } = await request.json();
  await MobileModel.create({ title, model, price });

  return NextResponse.json({
    message: "Mobile created successfully",
  });
}

// PUT Method - http://localhost:3000/api/products/mobiles

export async function PUT(request) {
  const { id, title, model, price } = await request.json();
  await MobileModel.updateOne({ _id: id }, { $set: { title, model, price } });
  return NextResponse.json({
    message: "Mobile updated successfully",
  });
}

/*

export async function PUT(request) {
  const mobileId = await request.nextUrl.searchParams.get("id");
  const {newTitle : title, newModel : model, newPrice : price} = await request.json();
  await MobileModel.findByIdAndUpdate(
    mobileId,
    { title, model, price },
    { new: true }
  );
  return NextResponse.json({
    message: "Mobile updated successfully",
  });
};


export async function DELETE(request) {
  const mobileId = await request.nextUrl.searchParams.get("id");
  await MobileModel.findByIdAndDelete(mobileId);
  return NextResponse.json({
    message: "Mobile deleted successfully",
  });
};

*/



// DELETE Method - http://localhost:3000/api/products/mobiles

export async function DELETE(request) {
  const { id } = await request.json();
  await MobileModel.deleteOne({ _id: id });
  return NextResponse.json({
    message: "Mobile deleted successfully",
  });
}

/*



import { NextResponse } from "next/server";
import MobileModel from "../../../utils/models/mobile";
import { DBconnection } from "../../../utils/config/db";

 export async function GET() {
  try {
    await DBconnection();

    const mobileData = await MobileModel.find({});
    return NextResponse.json({ mobiles: mobileData }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch mobiles" },
      { status: 500 }
    );
  }
}

 export async function POST(request) {
  try {
    await DBconnection();

    const { title, model, price } = await request.json();
    await MobileModel.create({ title, model, price });

    return NextResponse.json(
      { message: "Mobile created successfully" },
      { status: 201 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create mobile" },
      { status: 500 }
    );
  }
}

 export async function PUT(request) {
  try {
    await DBconnection();

    const { id, title, model, price } = await request.json();

    const updated = await MobileModel.findByIdAndUpdate(
      id,
      { title, model, price },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { error: "Mobile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Mobile updated successfully" },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update mobile" },
      { status: 500 }
    );
  }
}

 export async function DELETE(request) {
  try {
    await DBconnection();

    const { id } = await request.json();

    const deleted = await MobileModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Mobile not found" },
        { status: 404 }
      );
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



*/
