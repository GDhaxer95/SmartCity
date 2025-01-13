"use client"; // Ensure this is a client-side component

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically load the MapContainer and other components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

export default function MapComponent() {
  const sensors = [
    { id: 1, name: "Air Quality", lat: 48.8566, lng: 2.3522 },
    { id: 2, name: "Temperature", lat: 48.8584, lng: 2.2945 },
    { id: 3, name: "Noise Level", lat: 48.864716, lng: 2.349014 },
  ];

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {sensors.map((sensor) => (
        <Marker key={sensor.id} position={[sensor.lat, sensor.lng]}>
          <Popup>{sensor.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
