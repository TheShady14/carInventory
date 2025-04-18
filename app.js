const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const carRoutes = require("./routes/carRoutes");

const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
// Middleware to parse incoming JSON data
app.use(express.json());

// MongoDB connection details (using environment variables or defaults)
const username = process.env.MONGO_USERNAME || "benlombaard820";
const password = process.env.MONGO_PASSWORD || "y7s6GIA40ZV5Gxwd";
const cluster = process.env.MONGO_CLUSTER || "hyperioddev.ihxlk.mongodb.net";
const dbname = process.env.MONGO_DBNAME || "test";

// Construct the MongoDB connection string
const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Enable the new Server Discovery and Monitoring engine
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Use car routes for handling API requests related to cars
app.use("/api/cars", carRoutes);

// A simple test route to check if the server is running
app.get("/test", (req, res) => {
  res.send("Server is working");
});

// Define the port for the server (default: 5001)
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
