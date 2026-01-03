// returnPromise(): returns a Promise that fulfills once after 2 seconds.
// Note: `resolve` is called without a value, so the fulfillment value is `undefined`.
function returnPromise(){
    // The Promise executor receives `resolve`; calling it fulfills the promise.
    let p = new Promise(function(resolve){
        // Schedule a single resolve after 2000ms.
        setTimeout(function(){
            resolve()
        }, 2000)
    })
    return p
}

// Logs a Promise object (initially in the "pending" state).
console.log(returnPromise()) ; 

// Create a Promise and attach a `.then` handler that runs when it's fulfilled.
let k = returnPromise();
k.then(function(){
    console.log("Promise is resolved")
    // After resolution, logging `k` shows the promise is fulfilled.
    console.log(k)
})

// Show what value is received by `.then` when `resolve()` is called with no argument.
console.log("Passing Data through Resolve function")
let j = returnPromise();
j.then(function(data){
    console.log("Promise is resolved")
    console.log(j)
    // Logs the fulfillment value; here it will be `undefined`.
    console.log(data)
})