var express = require('express');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
var data = JSON.parse(fs.readFileSync('userSearch.json'));
var uuid = require('uuid/v1');

var app = express();
const file = './' + obj.file;

app.get('/search/:text', (req, res) => { 
    let myPromise = new Promise((resolve, reject) => {
      {
        
        var get_txt = req.params.text;
        if (get_txt) {
          data[uuid()] = get_txt;
          fs.writeFile(file, JSON.stringify(data, null, 2) +"\n", 'utf8', (err) => {
            if (err) { reject("Cannot write to file"); }
        });
          resolve('Resolved');
          res.send({ search: get_txt });
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
      console.log('Example app listening on port 3000!');
    });


    app.get('/getJson', (req, res) => { 
    res.send(data);
  });