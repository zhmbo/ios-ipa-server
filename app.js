const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express();
var base64 = require('base64-url');
var mustache = require('mustache');

app.get('/plist/:file', function(req, res) {

    // fs.readFile(path.join(__dirname, '..', 'templates') + '/template.plist', function(err, data) {
    fs.readFile(__dirname + '/template.plist', function(err, data) {
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
  });


const server = app.listen(8811, '0.0.0.0',  function(){
    let host = server.address().address;
    const interfaces = require('os').networkInterfaces();
    for (const key in interfaces) {
        if (Object.hasOwnProperty.call(interfaces, key)) {
            const element = interfaces[key];
            for (let i = 0; i < element.length; i++) {
                const ipObj = element[i];
                if (ipObj.family === 'IPv4') {
                    host = ipObj.address.split('/')[0]
                }
            }
        }
    }
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})