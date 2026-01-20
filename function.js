const fs = require("fs");


function createLog(date, type, data) {
 fs.writeFileSync(
 "log.txt",
 `Date: ${date}\nType: ${type}\nMessage: ${data}\n\n`
 );
 return "Log created successfully";
}


function readLog() {
 if (!fs.existsSync("log.txt")) {
 return "File does not exist";
 }

 const content = fs.readFileSync("log.txt", "utf-8");
 return content;
}


function updateLog(date, type, data) {
 fs.appendFileSync(
 "log.txt",
 `Date: ${date}\nType: ${type}\nMessage: ${data}\n\n`
 );
 return "Log updated successfully";
}


function deleteLog() {
 if (!fs.existsSync("log.txt")) {
 return "File already deleted";
 }

 fs.unlinkSync("log.txt");
 return "Log deleted successfully";
}


function writeLog() {
 fs.appendFileSync(
 "log.txt",
 `Time: ${new Date()}\nMessage: Log created\n-----------------\n`
 );

console.log("Log written");
}

console.log(createLog(new Date(), "ERROR", "This is an error"));
console.log(updateLog(new Date(), "INFO", "This is info log"));
console.log(readLog());
//console.log(deleteLog());
setInterval(()=> {
console.log(updateLog(new Date(), "INFO", "This is info log"));
},5000);

module.exports ={createLog,updateLog,readLog

};