"use client";

import { useEffect, useState } from "react";
import { getInitialSensorData, getUpdatedSensorData } from "@/lib/sensorSimulator";
import MapComponent from "@/components/MapComponent";
import ChartComponent from "@/components/ChartComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const [sensors, setSensors] = useState(getInitialSensorData());

  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(getUpdatedSensorData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Smart City Dashboard</h1>

        {/* Sensor Data Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sensor Data Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sensors.map((sensor) => (
              <div
                key={sensor.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold mb-2">{sensor.name}</h3>
                <p className="text-4xl font-semibold text-blue-600">
                  {sensor.value.toFixed(2)} {sensor.unit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sensor Locations</h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <MapComponent />
          </div>
        </section>

        {/* Chart Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Sensor Data Trends</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ChartComponent data={sensors} />
          </div>
        </section>
      </main>
    </div>
  );
}
