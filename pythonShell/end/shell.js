var PythonShell = require('python-shell');
var sleep = require('thread-sleep');
const threads = require('threads');

var options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    //args: ['value1', 'value2', 'value3']
    args: 'value'
};

var testPy = null;
var startTest = function(){ 
    testPy = PythonShell.run('test.py', options, function(err, results){
        if(err) throw err;

        console.log('results: %j', results);
    });
}
startTest();





//var res = sleep(1000);


/*
var endTest = function(){
    testPy.end(function (err) {
        if (err){
            throw err;
        };
        console.log('finished');
    });
};
*/

// endTest();

// startTest();
/*

const spawn   = threads.spawn;
const thread = spawn(function(input, done) {
  done({ string : input.string, integer : parseInt(input.string) });
});
 
thread
  .send({ string : '123' })
  // The handlers come here: (none of them is mandatory)
  .on('message', function(response) {
    thread.kill();
  })
  .on('error', function(error) {
    console.error('Worker errored:', error);
  })
  .on('exit', function() {
    console.log('Worker has been terminated.');
  });
*/

