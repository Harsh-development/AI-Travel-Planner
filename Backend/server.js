const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

// Import Database Connection
const connectDB = require("./config/db");

// Import Routes
const plannerRoutes = require("./routes/plannerRoutes");
const placeRoutes = require("./routes/placeRoutes");

// Debug Logs
console.log("--- Environment Variables Check ---");
console.log("PORT =", process.env.PORT);
console.log(
  "MONGO_URI =",
  process.env.MONGO_URI
    ? "Loaded Successfully ✅"
    : "Missing ❌"
);
console.log(
  "GEMINI_API_KEY =",
  process.env.GEMINI_API_KEY
    ? "Loaded Successfully ✅"
    : "Missing ❌"
);
console.log("----------------------------------");

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("AI Travel Planner Backend Running 🚀");
});

// Planner API Routes
app.use("/api/planner", plannerRoutes);

// Wikipedia Place Routes
app.use("/api/place", placeRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});