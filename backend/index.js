const express = require('express');
const OpenAI = require('openai');
const cors = require("cors");
require('dotenv').config(); 
const app = express();
const port = 8000;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json());
app.use(cors());


app.post('/refactor', async (req, res) => {
  const receivedData = req.body.content; // Access 'content' from the request body

  // Handle the received data as needed
  console.log('Received data:', receivedData);
  try {
    const response = await openai.chat.completions.create({

      messages: [{ "role": "system", "content": "You are a backend data processor that is part of our web site’s programmatic workflow. You will be provided with a program and you have to refactor the program. Do not include any explanation. Send back the pure program without any embedding the program in comments. If you are not provided any code then respond with sorry message." },
      { "role": "user", "content": receivedData }],
      model: "gpt-3.5-turbo",
      stream: true,
    });
    console.log(response);
    for await (const chunk of response) {
      if (chunk.choices[0].delta.content !== undefined) {
        //console.log(chunk.choices[0].delta.content);
        res.write(chunk.choices[0].delta.content);
      }
    }

    res.end();
  } catch (error) {
    console.error('Error from OpenAI API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

app.post('/review', async (req, res) => {
  const receivedData = req.body.content; // Access 'content' from the request body

  // Handle the received data as needed
  console.log('Received data:', receivedData);
  try {
    const response = await openai.chat.completions.create({

      messages: [{ "role": "system", "content": "You are a backend data processor that is part of our web site’s programmatic workflow. You will be provided with a program and you have to provide review of the program. Try to provide explanation of program, any optimisations if necessary and solutions for any errors in program. If you are not provided any code then respond with sorry message." },
      { "role": "user", "content": receivedData }],
      model: "gpt-3.5-turbo",
      stream: true,
    });
    console.log(response);
    for await (const chunk of response) {
      if (chunk.choices[0].delta.content !== undefined) {
        //console.log(chunk.choices[0].delta.content);
        res.write(chunk.choices[0].delta.content);
      }
    }
    res.end();
  } catch (error) {
    console.error('Error from OpenAI API:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
