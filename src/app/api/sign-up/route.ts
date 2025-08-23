import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/User.model";
import { Connect } from "@/libs/dbconnection";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
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
    if (!username || !email || !password || !city || !pinCode) {
      return NextResponse.json(
        {
          message: "All fields are required"
        }
      );
    }
    if (!userEmail) {
      if (!userName) {
        const hashPass = await bcrypt.hash(password, 10);
        const newUser = new Users({
          username,
          email,
          password: hashPass,
          city,
          pinCode,
        });
        await newUser.save();
        const token = jwt.sign(
          { userId: newUser._id, email: newUser.email },
          process.env.JWT_SECRET!,
          { expiresIn: "1d" }
        );
        (await cookies()).set("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: 24 * 60 * 60,
        });
        return NextResponse.json({
          message: "user created success fully",
          success: true,
          newUser,
          // redirectTo: "/",
        });
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
    console.error("Signup error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: true,
      },
      { status: 500 }
    );
  }
}
