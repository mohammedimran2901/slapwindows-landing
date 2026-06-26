import { NextRequest, NextResponse } from "next/server";
import { findLicenseByKey, activateLicense } from "@/models/License";

export async function POST(req: NextRequest) {
  const { key } = await req.json();

  const license = await findLicenseByKey(key);

  if (!license) {
    return NextResponse.json({ valid: false }, { status: 404 });
  }

  //Activate if it is the first time
  if (!license.activated) {
    await activateLicense(key);
    license.activated = true;
  }

  return NextResponse.json({ valid: true, email: license.email });
}
