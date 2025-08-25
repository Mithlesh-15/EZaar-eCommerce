import { NextRequest, NextResponse } from "next/server";
import Products from "@/models/Product.model";
import { Connect } from "@/libs/dbconnection";
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
  return NextResponse.json({
    message: "Product created succussully ",
  });
}
