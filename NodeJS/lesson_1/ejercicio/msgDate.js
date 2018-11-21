const argv = require('yargs').argv;

const date = new Date().toLocaleString();

let argvMsg = argv.msg;
let msgDate = "Message: " + argvMsg + " | Date: " + date +"\n";

module.exports = msgDate;