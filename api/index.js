const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express();
var base64 = require('base64-url');
var mustache = require('mustache');

module.exports = (req, res) => {

  fs.readFile(__dirname + '/template.plist', function(err, data) {
    if (err)
      throw err;
    var template = data.toString();

    var encodedName = req.query.name;

    var name = base64.decode(encodedName)

    var rendered = mustache.render(template, {
      encodedName: encodedName,
      name: "小杜",
      ipaUrl: "http://127.0.0.1/NoSign/22222222222.ipa",
    });

    // res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send(rendered);
  })
  
}