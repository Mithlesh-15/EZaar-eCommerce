import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Users from "@/models/User.model";
import { Connect } from "@/libs/dbconnection";
import { JwtPayload } from "jsonwebtoken";
Connect();
export async function GET() {
  const token = (await cookies()).get("token");
  if (!token)
    return NextResponse.json({
      message: "token not found",
      error: true,
    });
  const decode = await jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
  const user = await Users.findOne({email:decode.email})
  const userProduct = user.ownProduct
  console.log(userProduct)
}
