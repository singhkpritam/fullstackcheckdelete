const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 frontend को allow 
app.use(cors());

// json data handle 
app.use(express.json());

// ✅ API route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend  hello PRITAM SINGH RAJPUT 🚀🔥" });
});

// ✅ server start
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});