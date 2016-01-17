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
    if (msg.readdir) {
        fs.readdir(msg.readdir, function(err, files) {
            if (err) {
                push({ error: err.message || err });
            } else {
                files.forEach(function(file) {
                    push({ file: file });
                });
            }

            done();
        });
    } else if (msg.subscribe) {
        subscriptions[msg.subscribe] = true;
        push({ subscribed: msg.subscribe });
        done();
    } else if (msg.unsubscribe) {
        delete subscriptions[msg.unsubscribe];
        push({ unsubscribed: msg.unsubscribe });
        done();
    } else {
        // Just echo the message:
        push(msg);
        done();
    }
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
