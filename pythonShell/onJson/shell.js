var PythonShell = require('python-shell');
var inputData= {"name":"hello", "time":new Date().getSeconds()};

var options = {
    mode: 'json',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: JSON.stringify({"name":"hello", "time":new Date().getSeconds()})
};

PythonShell.run('test.py', options, function (err, results) {
    if (err) throw err;
    // console.log(JSON.stringify(options));
    console.log('results: %j', results);
});