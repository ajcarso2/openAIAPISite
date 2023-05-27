
function createJsonObject(prompt, ai) {
  let jsonObject = {
    "Prompt": prompt,
    "Ai": ai
  };
  return jsonObject;
}

const axios = require('axios');

async function sendJsonObject(ip, port, jsonObject) {
  try {
    const response = await axios.post(`http://${ip}:${port}/`, jsonObject);
    return response;
  } catch (error) {
    return error;
  }
}

