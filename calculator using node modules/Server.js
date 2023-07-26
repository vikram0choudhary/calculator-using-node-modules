// server.js
const express = require('express');
const math = require('mathjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { expression } = req.body;
  try {
    const result = math.evaluate(expression);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
