import connectToDatabase from "../lib/mongodb.js";
import User from "../lib/models/User.js";
import Sensor from "../lib/models/Sensor.js";
import SensorType from "../lib/models/SensorType.js";
import SensorData from "../lib/models/SensorData.js";
import Alert from "../lib/models/Alert.js";
import Report from "../lib/models/Report.js";

async function seedDatabase() {
  await connectToDatabase();

  // Clear existing data
  await User.deleteMany({});
  await Sensor.deleteMany({});
  await SensorType.deleteMany({});
  await SensorData.deleteMany({});
  await Alert.deleteMany({});
  await Report.deleteMany({});

  console.log("Database cleared.");

  // Seed users
  const users = await User.insertMany([
    {
      user_id: "u1",
      username: "AdminUser",
      email: "admin@example.com",
      password: "hashedpassword1", // Replace with a hashed password
      role: "admin",
    },
    {
      user_id: "u2",
      username: "ResearcherUser",
      email: "researcher@example.com",
      password: "hashedpassword2", // Replace with a hashed password
      role: "researcher",
    },
    {
      user_id: "u3",
      username: "NormalUser",
      email: "user@example.com",
      password: "hashedpassword3", // Replace with a hashed password
      role: "user",
    },
  ]);
  

  // Seed sensor types
  const sensorTypes = await SensorType.insertMany([
    { type_id: "1", type_name: "Air Quality" },
    { type_id: "2", type_name: "Temperature" },
    { type_id: "3", type_name: "Noise Level" },
  ]);

  console.log("Sensor types added:", sensorTypes);

  // Seed sensors
  const sensors = await Sensor.insertMany([
    {
      sensor_id: "s1",
      name: "Air Quality Sensor A",
      type_id: sensorTypes[0]._id,
      location: { latitude: 48.8566, longitude: 2.3522 },
      thresholds: { CO2: 50 },
      status: "active",
    },
    {
      sensor_id: "s2",
      name: "Temperature Sensor B",
      type_id: sensorTypes[1]._id,
      location: { latitude: 48.8584, longitude: 2.2945 },
      thresholds: { temperature: 35 },
      status: "active",
    },
    {
      sensor_id: "s3",
      name: "Noise Sensor C",
      type_id: sensorTypes[2]._id,
      location: { latitude: 48.864716, longitude: 2.349014 },
      thresholds: { noise: 70 },
      status: "inactive",
    },
  ]);

  console.log("Sensors added:", sensors);

  // Seed sensor data
  const sensorData = await SensorData.insertMany([
    {
      data_id: "d1",
      sensor_id: sensors[0]._id,
      timestamp: new Date(),
      value: 48,
    },
    {
      data_id: "d2",
      sensor_id: sensors[1]._id,
      timestamp: new Date(),
      value: 34,
    },
    {
      data_id: "d3",
      sensor_id: sensors[2]._id,
      timestamp: new Date(),
      value: 72, // Exceeds threshold
    },
  ]);

  console.log("Sensor data added:", sensorData);

  // Seed alerts
  const alerts = await Alert.insertMany([
    {
      alert_id: "a1",
      sensor_id: sensors[2]._id,
      type: "threshold_exceeded",
      message: "Noise level exceeded threshold",
      triggered_at: new Date(),
      status: "active",
    },
  ]);

  console.log("Alerts added:", alerts);

  // Seed reports
  const reports = await Report.insertMany([
    {
      report_id: "r1",
      user_id: users[1]._id,
      generated_at: new Date(),
      parameters: {
        date_range: "2025-01-01 to 2025-01-07",
        sensor_type: "Air Quality",
      },
      file_url: "/reports/report1.pdf",
    },
  ]);

  console.log("Reports added:", reports);

  console.log("Database seeding completed.");
}

seedDatabase().catch((err) => {
  console.error("Seeding failed:", err);
});
