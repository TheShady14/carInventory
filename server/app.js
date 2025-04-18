const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const carRoutes = require("./routes/carRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debugging middleware - log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// MongoDB connection details
const username = process.env.MONGO_USERNAME || "benlombaard820";
const password = process.env.MONGO_PASSWORD || "y7s6GIA40ZV5Gxwd";
const cluster = process.env.MONGO_CLUSTER || "hyperioddev.ihxlk.mongodb.net";
const dbname = process.env.MONGO_DBNAME || "test";

// Construct the MongoDB connection string
const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// API routes
app.use("/api/cars", carRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Determine the environment
const isDevelopment = process.env.NODE_ENV !== "production";

if (isDevelopment) {
  // In development, the React app is served by its own dev server (usually on port 3000)
  console.log("Running in DEVELOPMENT mode");
  console.log(
    "React app should be running on a separate dev server (e.g., http://localhost:3000)"
  );
} else {
  // In production, serve the built React app from client/build
  console.log("Running in PRODUCTION mode");

  // Serve static files from the React app build directory
  const reactBuildPath = path.join(__dirname, "../client/build");
  console.log("Serving React app from:", reactBuildPath);

  app.use(express.static(reactBuildPath));

  // For any request that doesn't match an API route, send the React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(reactBuildPath, "index.html"));
  });
}

// Define the port for the server (default: 5001)
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API available at: http://localhost:${port}/api`);

  if (isDevelopment) {
    console.log(
      "In development, access your React app at: http://localhost:3000"
    );
  } else {
    console.log("React app is being served from this server");
  }
});
