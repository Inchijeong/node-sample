var PythonShell = require('python-shell');
var fs = require("fs");

var pyshell = new PythonShell('my_script.py');

var data = {title:"abc", content:123};
var img = fs.ReadStream('C:\\zzz\\abc.jpg');
var text = fs.ReadStream('C:\\zzz\\abc.txt');
console.log(text);
var textfile = fs.readFile('C:\\zzz\\abc.txt', function (err, data) {
                   if (err) {
                      return console.error(err);
                   }
                   console.log("노드에서 읽은 파일 : " + data.toString());
                });


pyshell.send(JSON.stringify(data));

pyshell.on('message', function (message) {
    console.log("전달받은 메시지: " + message);
});

pyshell.end(function (err) {
    if (err){
        throw err;
    };

    console.log('finished');
});