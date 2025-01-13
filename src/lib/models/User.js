import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Should be hashed
  role: { type: String, enum: ["admin", "user", "researcher"], default: "user" }, // Updated roles
  created_at: { type: Date, default: Date.now },
  metadata: { type: Map, of: String, default: {} }, // Additional user metadata
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
