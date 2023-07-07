const express = require('express');
const serveIndex = require('serve-index')
const bodyParser = require('body-parser')

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', serveIndex(__dirname + '/static/css'));
app.use('/js', serveIndex(__dirname + '/static/js'));
app.use('/', express.static(__dirname + '/static/'));

app.use('/form', require())

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/html/404.html');
});

app.listen(3000, () => {

});