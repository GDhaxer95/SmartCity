// Simulated consistent initial data
export function getInitialSensorData() {
    return [
      { id: 1, name: "Air Quality", value: 50, unit: "AQI" },
      { id: 2, name: "Temperature", value: 25, unit: "°C" },
      { id: 3, name: "Noise Level", value: 40, unit: "dB" },
    ];
  }
  
  // Update function only runs on the client
  export function getUpdatedSensorData() {
    return [
      { id: 1, name: "Air Quality", value: 40 + Math.random() * 20, unit: "AQI" },
      { id: 2, name: "Temperature", value: 20 + Math.random() * 10, unit: "°C" },
      { id: 3, name: "Noise Level", value: 35 + Math.random() * 30, unit: "dB" },
    ];
  }
  