const express = require("express");
const app = express();

var fs = require('fs');
var https = require('https');
var options = {
    key: fs.readFileSync('./2.key'),
    cert: fs.readFileSync('./2.crt')
};
var server = https.createServer(options, app);

app.use(express.static("allowed"));

server.listen(3011);
