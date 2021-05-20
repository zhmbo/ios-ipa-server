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

    var params = req.query.plist;

    params = decodeURI(params);

    var paramsStr = base64.decode(params)
    
    var paramsArr = paramsStr.split("|");

    console.log(params,paramsArr)

    var rendered = mustache.render(template, {
      // encodedName: encodedName,
      name: nbiArr[0],
      bundleID: nbiArr[1],
      ipaUrl: nbiArr[2],
    });

    // res.set('Content-Type', 'text/plain; charset=utf-8');
    res.send(rendered);
  })
  
}