// SYNCHRONOUS CODE
// let h1Element = document.querySelector("h1");

// h1Element.innerHTML = "Let's make it Synchronous";

// alert("Who's this?")

// h1Element.style.backgroundColor = "teal"



// ASYNCHRONOUS CODE

let h1Element = document.querySelector("h1");

setTimeout(() => {
    alert("Hello there")
}, 0)

h1Element.style.backgroundColor = "yellow";
console.log("Loaded");



// ASYNCHRONOUS ACTIVITIES
// Timers - setTimeout(), setImmediate(), setInterval()
// Remote Server Calls - XMLHTTPRequest (XHR) / fetch() API
// Reading / Writing on files
// DB Connection
// Obtaining Socket from OS


// Sync Code runs first, before any async code

// fetch("https://data.covid19india.org/v4/min/data.min.json")
//     .then(response => response.json())
//     .then(result => console.log(result.AN))