import Products from "@/models/Product.model";
import { Connect } from "@/libs/dbconnection";
import { NextResponse } from "next/server";
Connect();
interface Pro {
  _id: string;
  imageUrl: string;
  productName: string;
  price: number;
  totalStock: number;
  availableStock: number;
  category: string;
  description: string;
}
export async function GET() {
  const allProduct = await Products.find().limit(6);
  if (allProduct.length === 0)
    return NextResponse.json({
      message: "No Product",
    });
  return NextResponse.json({
    allProduct
  });
}
