// create web server
// create api
// create comments api
// get
// post
// delete

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const comments = require('./comments');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/comments', (req, res) => {
    res.json(comments.getComments());
});

app.post('/api/comments', (req, res) => {
    const { name, comment } = req.body;
    comments.addComment(name, comment);
    res.json(comments.getComments());
});

app.delete('/api/comments/:id', (req, res) => {
    const { id } = req.params;
    comments.deleteComment(id);
    res.json(comments.getComments());
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
