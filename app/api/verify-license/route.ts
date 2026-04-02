import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import License from "@/models/License";

export async function POST(req: NextRequest) {
  const { key } = await req.json();
  await dbConnect();

  const license = await License.findOne({ key });

  if (!license) {
    return NextResponse.json({ valid: false }, { status: 404 });
  }

  //Activate if it is the first time
  if (!license.activated) {
    license.activated = true;
    await license.save();
  }

  return NextResponse.json({ valid: true, email: license.email });
}