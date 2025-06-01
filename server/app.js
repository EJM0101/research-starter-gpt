const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateFromOpenRouter = require('./openaiRouter');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/generate', async (req, res) => {
  const { theme } = req.body;
  if (!theme) return res.status(400).json({ error: "Thème requis" });
  try {
    const result = await generateFromOpenRouter(theme);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});