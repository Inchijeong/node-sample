var fetch = require('node-fetch');
var fs = require('fs');
var FormData = require('form-data');

var picture = fs.ReadStream('C:\\zzz\\abc.jpg');
var form = new FormData();

form.append('file', picture);

fetch('http://192.168.0.25:8090/start', {
    method: 'POST',
    body: form
}).then(function(res){
    return res;
}).catch(function(err){
    console.log(err);
});
    
/*

// 나현누나 코드

const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const server = require('http').createServer();

server.listen(3000, function(){
    var rs = fs.ReadStream("C:\\zzz\\aaa.txt");
    console.log(rs);
    rs.on('open', function () {
        console.log('The file is open');
    });
    rs.on('error',function(){
        console.log("error");
    });

    var formData = new FormData();
    formData.append('file',rs);
    fetch('http://192.168.0.25:8090/uploadTest', {method:'POST',body:formData})
        .then(function(res) {
            return res;
        }).then(function(json) {
            console.log(json);
        }
    );
});

*/
