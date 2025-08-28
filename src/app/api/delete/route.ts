import Products from "@/models/Product.model";
import { Connect } from "@/libs/dbconnection";
import { NextRequest, NextResponse } from "next/server";

Connect();

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const deleted = await Products.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete API Error:", err);
    return NextResponse.json(
      { error: "Server error while deleting" },
      { status: 500 }
    );
  }
}
