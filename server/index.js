require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task");

const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

// port

PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Port is running on http://localhost:${PORT}`);
});

// Task Routes

app.use("/api/tasks", taskRoutes);
