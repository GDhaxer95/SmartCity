# Smart City Sensors

A web application for managing IoT sensors in smart cities.

## Features

- User authentication with roles (Admin, User, Researcher).
- Real-time data visualization with charts and maps.
- Alerts and threshold-based notifications.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add a .env file with:
   ```bash
   MONGO_URI=mongodb://localhost:27017/smart_city
   JWT_SECRET=your_secure_secret_key
   ```
4. Start the developpment server:
   ```bash
   npm run dev
   ```
