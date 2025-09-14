const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Example Route: Courses Data
app.get("/api/courses", (req, res) => {
  res.json([
    { id: 1, name: "MERN Stack", duration: "3 Months" },
    { id: 2, name: "Python & AI", duration: "4 Months" },
  ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
