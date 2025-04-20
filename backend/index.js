const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Updated error handling and logging for better debugging
app.post('/save-qr-data', (req, res) => {
  try {
    const { id, rawTextValue, createdAt, updatedAt } = req.body;

    if (!id || !rawTextValue || !createdAt || !updatedAt) {
      console.error('Missing required fields:', req.body);
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const qrDataPath = path.join(__dirname, '../demo/src/data/qrData.json');
    let qrData = [];

    if (fs.existsSync(qrDataPath)) {
      try {
        const fileContent = fs.readFileSync(qrDataPath, 'utf8');
        qrData = JSON.parse(fileContent);
      } catch (err) {
        console.error('Error parsing existing QR data file:', err);
        console.warn('Resetting QR data file to an empty array.');
        qrData = []; // Reset to empty array if JSON is invalid
      }
    }

    qrData.push({ id, rawTextValue, createdAt, updatedAt });

    try {
      fs.writeFileSync(qrDataPath, JSON.stringify(qrData, null, 2));
    } catch (err) {
      console.error('Error writing to QR data file:', err);
      return res.status(500).json({ error: 'Error saving QR data' });
    }

    res.status(200).json({ message: 'QR code data saved successfully' });
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});