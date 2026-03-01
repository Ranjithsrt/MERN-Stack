import { jwtVerify } from "jose";

const SECRET_KEY = process.env.JWT_SECRET_KEY;
const encodedSecretKey = new TextEncoder().encode(SECRET_KEY);

// jwt verify
export async function verifyJWT(token) {
  try {
    console.log("JWT Secret Key :", SECRET_KEY);
    console.log(encodedSecretKey);
    console.log("JWT Token :", token);

    const { payload } = await jwtVerify(token, encodedSecretKey);
    console.log("Decoded JWT", payload);
    return payload;
  } catch (error) {
    console.error("Error verifying JWT:", error.message);
    return null;
  }
}
