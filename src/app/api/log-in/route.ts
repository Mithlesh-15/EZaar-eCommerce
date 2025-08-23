import { NextRequest, NextResponse } from "next/server";
import { Connect } from "@/libs/dbconnection";
import Users from "@/models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
Connect();
type loginTyp = {
  email: string;
  password: string;
};
export async function POST(request: NextRequest) {
  try {
    const { email, password }: loginTyp = await request.json();
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "This email isn't registered. Please sign up first.",
        }
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password is", isPasswordValid);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid email or password.",
          
        }
      );
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
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
      message: "user login success fully",
      success: true,
      redirectTo: "/",
    });
  } catch (error) {
    return NextResponse.json({
      message: (error as Error).message,
      error: true,
    });
  }
}
