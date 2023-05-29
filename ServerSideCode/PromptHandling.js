const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum} = require('openai');
const cors = require('cors');

const configuration = new Configuration({
  organization: "org-VKMeUr7uSIUI70D7ZNZSrImx",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// I don't know what this does, but it's needed for the code to work
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  let prompt = req.body.Prompt; // This is the prompt that the user inputs
  let ai = req.body.Ai; // This is the AI that the user selects
  let type = req.body.Type; // This is the style of API based on the AI that the user selects

  console.log(prompt);
  console.log(type);
  console.log(ai);

  try {

    const messages = [{
      role: ChatCompletionRequestMessageRoleEnum.User, // <--- use the enum here
      content: prompt
    }];


    // Completion is the type of API used for the earlier developed AI's such as ada and davinci
    if(type === "Completion"){
      const response = await openai.createCompletion({
        model: ai,
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0,
      });

      console.log(response.data.choices[0].text);

      res.json({ Response: response.data.choices[0].text });


    // Chat is the type of API used for the GPT-3.5 AI and GPT-4 AI
    }else if(type === "Chat"){
      const response = await openai.createChatCompletion({
        model: ai,
        messages: messages,
      });

      console.log(response.data.choices[0].message.content);

      res.json({ Response: response.data.choices[0].message.content });

    // Edit is the type of API used for the newer specific Ai's that main goal is to edit text instead of responding to it
    }else if(type === "Edit"){
      const response = await openai.createCompletion({
        model: ai,
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0,
      });

      console.log(response.data.choices[0].text);

      res.json({ Response: response.data.choices[0].text });
    }



  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
