async function sendJsonObject(ip, port, jsonObject) {
  try {
    const response = await axios.post(`http://${ip}:${port}/`, jsonObject);
    return response;
  } catch (error) {
    return error;
  }
}

function createJsonObject(prompt, ai) {
  let jsonObject = {
    "Prompt": prompt,
    "Ai": ai
  };
  return jsonObject;
}

export class JSONNetworkHandler {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  async sendPrompt(prompt, ai) {
    let jsonObject = createJsonObject(prompt, ai);
    let response = await sendJsonObject(this.ip, this.port, jsonObject);
    return response;
  }
}
