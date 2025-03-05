require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// import route pages
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

// task routes
app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoutes);

// db connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    PORT = process.env.PORT;

    app.listen(PORT, () => {
      console.log(
        `Connected Successfully ! Port is running on http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
