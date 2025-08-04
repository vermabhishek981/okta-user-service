# Okta User Service

A simple Node.js and Express-based REST API that connects to the Okta Identity API to fetch user profiles and their registered devices.

---

## 🧰 Features

- ✅ Fetch all Okta users
- 📱 Get devices registered to a specific user
- 🔐 Secure API calls with Okta API token
- ⚙️ Environment-based configuration

---

## 📁 Project Structure

okta-user-service/
├── app.js # Express app with route definitions
├── services/
│ └── okta.js # Logic to call Okta API
├── .env # Environment variables
├── package.json # Project metadata and scripts
├── README.md # This file
