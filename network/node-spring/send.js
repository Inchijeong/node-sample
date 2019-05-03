var http = require("http");

var inputData = {"title":"icj", "content":"aaaa"};


var inputString = "hello"

var queryParams = {
          host: '192.168.0.25',
          port: 8090,
          path: '/start',
          method: 'POST',
          headers: {'Content-type': 'application/text'},
          body: inputString
        };

setInterval(function(){


    var req = http.request(queryParams, function(res) {
            res.on('data', function(body){
                
                // var todo = JSON.parse(body);
                
                // console.log(typeof todo);
                // console.log("response : " + todo);
                // console.log("title : " + todo.title);
            });
            //do something with response
        });


    

    // console.log("데이터 보내기");


    console.log("반복");
    // req.write(JSON.stringify(inputData));
    req.write(inputString);
    
    req.end();
}, 2000);

