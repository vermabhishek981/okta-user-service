const express = require("express");
const dotenv = require("dotenv");
const oktaService = require("./services/okta");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/users", async (req, res) => {
  try {
    const users = await oktaService.getUsers();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/users/:id/devices", async (req, res) => {
  const { id } = req.params;
  try {
    const devices = await oktaService.getUserDevices(id);
    res.json(devices);
  } catch (err) {
    console.error("Error fetching devices:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
