// imports
const express = require('express');
const path = require('path');

// setup
const app = express();

// port
const PORT = process.env.PORT || 3000;

//templating enginge
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
