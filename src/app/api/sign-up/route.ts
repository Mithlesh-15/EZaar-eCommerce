import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/User.model";
import { Connect } from "@/libs/dbconnection";
import bcrypt from "bcrypt";
Connect();
type userType = {
  username: string;
  email: string;
  password: string;
  city: string;
  pinCode: number;
};
export async function POST(request: NextRequest) {
  try {
    const reqbody = await request.json();
    const { username, email, password, city, pinCode }: userType = reqbody;
    console.log(username, email, password, city, pinCode);
    const userEmail = await Users.findOne({ email });
    const userName = await Users.findOne({ username });
    if (!userEmail) {
        if (!userName) {
         
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = new Users({
          username,
          email,
          password:hashPass,
          city,
          pinCode,
        });
        await newUser.save()
        console.log("ok")
        return NextResponse.json({
            message:"user created success fully",
            newUser
        })
      } else {
        return NextResponse.json({
          message: "This username already exists. Try a different one.",
        });
      }
    } else {
      return NextResponse.json({
        message: "User Already Exist",
      });
    }
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
