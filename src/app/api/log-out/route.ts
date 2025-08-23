import { cookies } from "next/headers";

export async function GET() {
    (await cookies()).set("token","")
}
