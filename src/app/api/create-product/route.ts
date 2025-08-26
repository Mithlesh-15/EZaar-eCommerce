import { NextRequest, NextResponse } from "next/server";
import Products from "@/models/Product.model";
import Users from "@/models/User.model";
import { Connect } from "@/libs/dbconnection";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
Connect();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const {
    imageUrl,
    productName,
    price,
    totalStock,
    availableStock,
    category,
    description,
  } = reqBody;
  const newProduct = new Products({
    imageUrl,
    productName,
    price,
    totalStock,
    availableStock,
    category,
    description,
  });
  await newProduct.save();
  console.log("Product created succussully");
  const token = (await cookies()).get("token")?.value;

  if (!token) return NextResponse.json({ error: "No token" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      email: string;
    };
    const userEmail = decoded.email;
     await Users.findOneAndUpdate({ email: userEmail },{$push:{
      ownProduct:newProduct._id
    }});
  } catch (error) {
    return NextResponse.json({
      message: `invalid token ${error}`,
      error: true,
    });
  }

  return NextResponse.json({
    message: "Product created succussully ",
  });
}
