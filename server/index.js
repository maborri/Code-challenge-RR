const express = require("express");
const axios = require('axios');
const cors = require('cors');

const PORT = 1234;
const app = express();

app.get("/quiz-results", cors(), async (req, res) => {
  const url = 'https://zzz-api-backend-stage.herokuapp.com/api/quiz/results';

  try {
    const response = await axios.get(url)
    console.log(response.data);
    res.send(response.data);
  } catch (e) {
    console.error('Unexpected error:', e);
    res.sendStatus(500).send(response.data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});