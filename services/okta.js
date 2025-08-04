const axios = require("axios");
require("dotenv").config();

const OKTA_DOMAIN = process.env.OKTA_DOMAIN;
const API_TOKEN = process.env.OKTA_API_TOKEN;

const client = axios.create({
  baseURL: `${OKTA_DOMAIN}/api/v1`,
  headers: {
    Authorization: `SSWS ${API_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

async function getUsers() {
  const response = await client.get("/users");
  return response.data;
}

async function getUserDevices(userId) {
  try {
    const response = await client.get(`/users/${userId}/devices`);
    return response.data;
  } catch (err) {
    if (err.response?.status === 404) return [];
    throw err;
  }
}

module.exports = {
  getUsers,
  getUserDevices,
};
