var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var router = require('./router');

app.use("*",router);

app.listen(port);