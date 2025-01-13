import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  report_id: { type: String, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  generated_at: { type: Date, default: Date.now },
  parameters: { type: Map, of: String }, // Filters used for the report
  file_url: { type: String, required: true }, // URL of the generated report
});

export default mongoose.models.Report || mongoose.model("Report", ReportSchema);
