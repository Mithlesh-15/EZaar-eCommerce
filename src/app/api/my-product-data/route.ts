import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Users from "@/models/User.model";
import Products from "@/models/Product.model";
import { Connect } from "@/libs/dbconnection";
import { JwtPayload } from "jsonwebtoken";
Connect();
interface Pro {
  imageUrl: string;
  productName: string;
  price: number;
  totalStock: number;
  availableStock: number;
  category: string;
  description: string;
}
export async function GET() {
  const token = (await cookies()).get("token")?.value;
  if (!token)
    return NextResponse.json({
      message: "token not found",
      error: true,
    });
  const decode = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
  const user = await Users.findOne({email:decode.email})
  
  const totalProduct : Pro[] = []
  // user.ownProduct.forEach(async (item:string)=>{
  //   const product = await Products.findById(item)
    
  //   totalProduct.push(...product)
  // })
  for (const item of user.ownProduct) {
      const product = await Products.findById(item);
      if (product) {
        totalProduct.push({
          imageUrl: product.imageUrl,
          productName: product.productName,
          price: product.price,
          totalStock: product.totalStock,
          availableStock: product.availableStock,
          category: product.category,
          description: product.description,
        });
      }
    }
  return NextResponse.json({
    allProduct: totalProduct || []
  })

}
