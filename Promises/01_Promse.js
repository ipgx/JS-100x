const fs = require("fs")
// Counters used to demonstrate multiple calls and callbacks
let ID = 0;
let functionCall = 0;

// pgReturnFile(): reads `data/a.txt` and returns a Promise that fulfills
// with the file contents. Each call increments counters to show the
// asynchronous flow and ordering of callbacks vs Promise resolution.
function pgReturnFile(){

    functionCall += 1;
    console.log(`I am from the number ${functionCall} return file function execution`) ; 
 
    // Return a Promise that resolves when fs.readFile finishes.
    return new Promise(function(resolve){
        console.log("Inside Promise")

        // Node-style async read; the callback runs when the file read completes.
        fs.readFile("data/a.txt", "utf-8", function(err, data){
            // Increment ID to show the callback invocation order.
            ID += 1;
            console.log(`I am from the number ${ID} callback`) ; 

            // At this point we have the data (or an error). For simplicity
            // this example ignores `err` and resolves with `data`.
            console.log("Before Resolve")
            resolve(data) // fulfill the Promise with the file contents

            // Code after resolve runs immediately in this callback, but
            // any `.then` handlers attached to the Promise will run
            // asynchronously (microtask queue) after the current call stack.
            console.log("Data is here : ", data)
        });
    })
}

// Simple handler that logs the resolved value from the Promise.
function onDone(data){
    console.log(data)
}

// Call the function and attach a `.then` to receive the data when ready.
pgReturnFile().then(onDone)

// Logging the return value shows the Promise object (initially pending).
console.log(pgReturnFile())