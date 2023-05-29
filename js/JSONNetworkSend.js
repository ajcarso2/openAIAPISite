async function sendJsonObject(ip, port, jsonObject) {
  try {
    const response = await axios.post(`http://${ip}:${port}/`, jsonObject);
    return response;
  } catch (error) {
    return error;
  }
}

function createJsonObject(prompt, ai, type) {
  let jsonObject = {
    "Prompt": prompt,
    "Ai": ai,
    "Type": type,
  };
  return jsonObject;
}

export class JSONNetworkHandler {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }
  async sendPrompt(prompt, ai, type) {
    let jsonObject = createJsonObject(prompt, ai, type);
    console.log(jsonObject);
    let response = await sendJsonObject(this.ip, this.port, jsonObject);
    return response;
  }
}
