import crypto from "crypto";

export function generateLicenseKey(): string {
  const raw = crypto.randomBytes(16).toString("hex").toUpperCase();
  // Format: SLAP-XXXX-XXXX-XXXX-XXXX
  return `SLAP-${raw.slice(0,4)}-${raw.slice(4,8)}-${raw.slice(8,12)}-${raw.slice(12,16)}`;
}