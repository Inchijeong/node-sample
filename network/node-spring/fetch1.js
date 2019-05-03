var fetch = require('node-fetch');

fetch('http://192.168.0.25:8090/start', {
    headers: {'Content-type': 'application/text'},
    method: 'POST',
    body: "abc"
}).then(function(res){
    return result.text();
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});