const fs = require('fs');
const msgDate = require('./msgDate.js');
const filename = require('./file.js');

        fs.appendFile(filename, msgDate, function (err) {
            if (err) throw err;
            console.log('File Saved');
          });

//to run type node app.js --msg="your message"

  