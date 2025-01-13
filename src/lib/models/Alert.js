import mongoose from "mongoose";

const AlertSchema = new mongoose.Schema({
  alert_id: { type: String, required: true, unique: true },
  sensor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Sensor", required: true },
  type: { type: String, required: true }, // e.g., "threshold_exceeded", "system_error"
  message: { type: String, required: true },
  status: { type: String, enum: ["active", "resolved"], default: "active" },
  triggered_at: { type: Date, default: Date.now },
});

export default mongoose.models.Alert || mongoose.model("Alert", AlertSchema);
