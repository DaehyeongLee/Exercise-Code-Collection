// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let enter_arr = ""
let parent = []
let child = []
let answer = "YES"

rl.on("line", function(line) {
	enter_arr = line
	
}).on("close", function() {
		
	parent = enter_arr.split(" ")[0].split("")
	child = enter_arr.split(" ")[1].split("")
	
	parent = parent.sort()
	child = child.sort()
	
	let child_set = new Set(child)
	child = Array.from(child_set)
	
	answer = JSON.stringify(parent) == JSON.stringify(child) ? "YES" : "NO"
		
	
	console.log(answer)
	process.exit();
});