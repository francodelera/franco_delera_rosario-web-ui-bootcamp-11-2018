var express = require('express');
var fs = require('fs');
var uuid = require('uuid/v1');
var obj = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

var app = express();
const file = './' + obj.file;

app.get('/text=:text', (req, res) => { 
    let myPromise = new Promise((resolve, reject) => {
      {
        var get_txt = req.params.text;
        if (get_txt) {
          uuid = uuid();
          console.log("Logger v" + obj.version);
          var log = { seesionId: uuid, msg: get_txt, date: new Date() };
          fs.appendFile(file, JSON.stringify(log) +",\n", 'utf8', (err) => {
            if (err) { reject("Cannot write to file"); }
        });
          resolve('Resolved');
          res.send({ seesionId: uuid, msg: get_txt });
        } else {
          reject('Rejected');
          res.send("Something failed");
        }
      }
    });
    
    myPromise.then((successMessage) => {
      console.log(`Promise ${successMessage}`);
    }, (errorMessage) => {
      console.log(`Promise ${errorMessage}`);
    });
    
  });
    
    app.listen(3000, () => {
      console.log('Example app listening on port 3000! Type your message after text= parameter');
    });



