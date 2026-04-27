// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// 👇 ADD YOUR TEST ROUTE HERE
app.get("/test-db", async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send("DB is working ✅");
  } catch (err) {
    res.send("DB not working ❌");
  }
});

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
app.listen(8000, () => {
  console.log("Server running on port 8000");
});