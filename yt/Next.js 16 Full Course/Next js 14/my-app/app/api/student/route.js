// import { NextResponse } from "next/server";
// import { DBconnection } from "../../../utils/config/db";

// database connection or call DB connection function here
// const ConnectDB = async () => {
//     await DBconnection();
// }
// ConnectDB();

// GET Method
// export async function GET() {
//   return NextResponse.json({
//     message: "Hello, Student!",
//   });
// }

import { NextResponse } from "next/server";
import { DBconnection } from "../../utils/config/db";

export async function GET() {
  await DBconnection();

  return NextResponse.json({
    message: "Hello, Student!",
  });
}

// http://localhost:3000/api/student