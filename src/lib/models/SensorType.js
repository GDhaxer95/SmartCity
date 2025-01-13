import mongoose from "mongoose";

const SensorTypeSchema = new mongoose.Schema({
  type_id: { type: String, required: true, unique: true },
  type_name: { type: String, required: true },
});

export default mongoose.models.SensorType || mongoose.model("SensorType", SensorTypeSchema);
