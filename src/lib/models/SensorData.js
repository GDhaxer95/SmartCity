import mongoose from "mongoose";

const SensorDataSchema = new mongoose.Schema({
  data_id: { type: String, required: true, unique: true },
  sensor_id: { type: mongoose.Schema.Types.ObjectId, ref: "Sensor", required: true },
  timestamp: { type: Date, required: true },
  value: { type: Number, required: true },
});

export default mongoose.models.SensorData || mongoose.model("SensorData", SensorDataSchema);
