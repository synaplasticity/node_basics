
console.log(process.argv);

var sum = 0.0;

for(i = 2; i < process.argv.length; i++) {
    sum = sum + process.argv[i]
}

console.log("Sum is:", sum);