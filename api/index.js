const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express();
var base64 = require('base64-url');
var mustache = require('mustache');

module.exports = (req, res) => {
    // const { name = 'World' } = req.query
    // res.send(`Hello ${name}!`)

  fs.readFile(path.join(__dirname, '..') + '/template.plist', function(err, data) {
  // fs.readFile(__dirname + '/template.plist', function(err, data) {
    if (err)
      throw err;
    var template = data.toString();

    var encodedName = req.params.file;
    var name = base64.decode(encodedName)
    var rendered = mustache.render(template, {
      encodedName: encodedName,
      name: name,
      ip: "ipAddress",
      port: "port",
    });

    res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send(rendered);
  })
  
}