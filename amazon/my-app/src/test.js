/**
 * Created by winston on 1/7/17.
 */
import express from 'express';

var app = express();
console.log("test");

app.get('/', function (request, response, next) {
    console.log("it workds");
    response.send("works");

});