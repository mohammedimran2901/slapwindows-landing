import mongoose from "mongoose";

const LicenseSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  paymentId: { type: String, required: true },
  activated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.License || mongoose.model("License", LicenseSchema);