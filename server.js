const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve frontend files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for race results
app.post('/api/race-result', (req, res) => {
  const { winner, loser } = req.body;
  // Call your play.js script here to update the blockchain
  // Example: `node ./src/play.js {carsCollectionId} {achievementsCollectionId} {winnerTokenId} {loserTokenId}`
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
