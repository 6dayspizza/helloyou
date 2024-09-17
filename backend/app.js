// imports
const express = require('express');
const path = require('path');

// setup
const app = express();

// port
const PORT = process.env.PORT || 3000;

//templating enginge
app.use(express.static(path.join(__dirname, '../frontend/helloyou-vue/dist')));

// routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/helloyou-vue/dist/index.html'));
  });

// server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
