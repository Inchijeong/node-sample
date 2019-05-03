// var fetch = require('node-fetch');
var fs = require('fs');
var fetch = require('fetch-file');

var send = {"title":"abc", "content":"안돼?"};

fetch('http://192.168.0.25:8090/start',
    {headers: {'Content-type': 'application/json'}, method: 'POST', body: JSON.stringify(send) })
    .then(function(res) {
        return res.json();
    }).then(function(body) {
        console.log("========================================" + JSON.stringify(body));
    }).catch(function(err) {
        //console.log(err);
    });
