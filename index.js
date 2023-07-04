const express = require('express');
var serveIndex = require('serve-index')

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});


app.use('/css', serveIndex(__dirname + '/static/css'));
app.use('/js', serveIndex(__dirname + '/static/js'));
app.use('/', express.static(__dirname + '/static/'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/html/404.html');
});

app.listen(3000, () => {

});