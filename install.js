var exec = require('child_process').exec;

function handleError(error) {
	if(error){
		console.log("Error:", error);
		process.exit();
	}
}

function linkTestStudio(){
	console.log("Installing `tmtest` command line tool...");

	exec("npm link", {cwd: __dirname + "/bin/tmtest/"}, function (error, stdout, stderr) {
		handleError(error);
	});
}

linkTestStudio();