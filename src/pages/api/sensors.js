import connectMongo from "@/lib/mongo";
import Sensor from "@/models/Sensor";

export default async function handler(req, res) {
  await connectMongo();
  const sensors = await Sensor.find({});
  res.status(200).json(sensors);
}
