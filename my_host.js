var fs = require('fs');

var nativeMessage = require('./index');


var input = new nativeMessage.Input();
var transform = new nativeMessage.Transform(messageHandler);
var output = new nativeMessage.Output();

process.stdin
  .pipe(input)
  .pipe(transform)
  .pipe(output)
  .pipe(process.stdout)
;

var subscriptions = {};

var timer = setInterval(function() {
    if (subscriptions.time) {
        output.write({ time: new Date().toISOString() });
    }
}, 1000);

input.on('end', function() {
    clearInterval(timer);
});

function messageHandler(msg, push, done) {
  writeMessageToFile(msg);
}

function writeMessageToFile(message){
  fs.writeFile("C:\\Users\\IBM_ADMIN\\projects\\node-host-log.txt", message,
      function(err) {
        if(err) {
         return console.log(err);
      }

      console.log("The file was saved!");
  })
}
