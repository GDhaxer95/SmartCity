import mongoose from "mongoose";

const SensorSchema = new mongoose.Schema({
  sensor_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type_id: { type: mongoose.Schema.Types.ObjectId, ref: "SensorType", required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  thresholds: {
    type: Map,
    of: Number, // Example: { CO2: 50, noise: 80 }
    default: {},
  },
  status: { type: String, enum: ["active", "maintenance", "inactive"], default: "active" },
  metadata: { type: Map, of: String, default: {} }, // Additional sensor metadata
});

export default mongoose.models.Sensor || mongoose.model("Sensor", SensorSchema);
