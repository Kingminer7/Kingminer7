const express = require('express');
const serveIndex = require('serve-index')
const bodyParser = require('body-parser')

const app = express.router();

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/forms/' + req.params[0] + '.html');
});