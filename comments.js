const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create another route
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Create a route with a parameter
app.get('/comments/:id', (req, res) => {
    res.send(`Comments id: ${req.params.id}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});