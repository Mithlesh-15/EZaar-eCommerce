import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const token = (await cookies()).has('token')
    if(!token) return NextResponse.json({
        logIn:false
    })
    return  NextResponse.json({
        logIn:true
    })
}