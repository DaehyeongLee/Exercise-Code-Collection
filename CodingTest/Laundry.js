// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let enter_arr = []
let color = []
let laundry = []
let answer = 0

rl.on("line", function(line) {
	enter_arr.push(line)
}).on("close", function() {
	
	enter_arr.shift()
	color = enter_arr.shift().split(' ')
	
	enter_arr.map((item, index) => {
		laundry.push(item.split(' '))
	})

	color.forEach((item) => {
		let filtered = laundry.filter(x => x[1] === item )
		let filtered_sort = filtered.reverse()
		let len = filtered_sort.length;
		
		for (let i = 0; i < len; i++) {
			if (i % 2 == 1) {
				filtered_sort.splice(i, 1)
			}
		}
		let result = filtered_sort.reduce((sum, current) => sum + parseInt(current[0]), 0);
		answer = result + answer
	})
	
	console.log(answer)
	
	process.exit();
});