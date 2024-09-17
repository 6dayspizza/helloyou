const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// other routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// test route
app.get('/api', (req, res) => {
  res.send('API is working!');
});

// errors
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});