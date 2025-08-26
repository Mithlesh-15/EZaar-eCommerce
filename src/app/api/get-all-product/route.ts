import Products from "@/models/Product.model";
import { Connect } from "@/libs/dbconnection";
import { NextResponse } from "next/server";
Connect()
export async function GET() {
 const allProduct = await Products.find()
 if(allProduct.length === 0) return NextResponse.json({
    message:"No Product"
 })
 return NextResponse.json({
    allProduct
 })
}
