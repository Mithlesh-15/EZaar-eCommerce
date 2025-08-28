import Products from "@/models/Product.model";
import { Connect } from "@/libs/dbconnection";
import { NextRequest, NextResponse } from "next/server";
Connect()
export async function POST(req:NextRequest) {
   const {filterValue} = await req.json()
 if(filterValue === "All"){const allProduct = await Products.find()
 if(allProduct.length === 0) return NextResponse.json({
    message:"No Product"
 })
 return NextResponse.json({
    allProduct
 })}
 else{
   const allProduct = await Products.find({category:filterValue})
 if(allProduct.length === 0) return NextResponse.json({
    message:"No Product"
 })
 return NextResponse.json({
    allProduct
 })
 }

}
