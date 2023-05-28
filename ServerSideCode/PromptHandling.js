const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { Configuration, OpenAIApi} = require('openai');
const cors = require('cors');  // <-- Import the cors module

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


openai.apiKey = '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';

const app = express();
app.use(bodyParser.json());
app.use(cors());  // <-- Use cors middleware

app.post('/', async (req, res) => {
  let prompt = req.body.Prompt;
  let ai = req.body.Ai;

  console.log(prompt);

  try {
    if(ai === "gpt-3.5-turbo"){
      const response = await openai.createCompletion({
        model: ai,
        prompt: prompt,
        max_tokens: 1000,
        temperature: 0,
      });

      console.log(response.data.choices[0].text);

      res.json({ Response: response.data.choices[0].text });

    }else{
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
