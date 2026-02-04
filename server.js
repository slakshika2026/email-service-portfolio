// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailRoutes = require("./src/routes/email.routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS Configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-portfolio-domain.com"], // Update this when you deploy
    methods: ["POST", "GET"],
  }),
);

// Routes
// This will make your endpoint: http://localhost:5000/api/email/send
app.use("/api/email", emailRoutes);

// Health Check (Optional: Good for verifying deployment works)
app.get("/", (req, res) => {
  res.send("Email Service is Running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
