var fs = require('fs');


var obj = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const filename = './' + obj.file;

fs.appendFile(filename, "Logger v" + obj.version + " | ", function (err) {
    if (err) throw err;
  });

module.exports = filename;




