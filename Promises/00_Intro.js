
const fs = require('fs');

// Print the Node.js runtime version
console.log(`Hello Node.js v${process.versions.node}!`);

// Asynchronously read `data/a.txt` and log its contents when ready.
fs.readFile('data/a.txt', 'utf-8', function (err, data) {
  console.log(data);
});

// This logs immediately (synchronous)
console.log('Hello - 1');

// Schedule a callback to run after 1 second.
setTimeout(function () {
  console.log('Hello from Timeout_1');
}, 1000);

// Read more files asynchronously; callbacks may run in any order
// depending on file system timing.
fs.readFile("data/a.txt", "utf-8", function(err,data){
  console.log(data)
})

fs.readFile("data/a.txt", "utf-8", function(err,data){
  console.log(data)
})
