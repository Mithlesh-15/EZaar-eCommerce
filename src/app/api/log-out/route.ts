import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  // delete token cookie
  cookieStore.set("token", "", {
    expires: new Date(0), // purani date
    path: "/",            // same path jaha cookie set hui thi
  });

  return Response.json({ message: "Cookie deleted" });
}
