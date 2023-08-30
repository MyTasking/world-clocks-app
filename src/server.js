const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();


app.use(cors());


app.get('/api/timezone', async (req, res) => {
  try {
    
    const response = await axios.get('https://worldtimeapi.org/api/timezone');

    res.json(response.data);
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
