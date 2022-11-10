// Building Promise (Producer Code)

const buildPromise = (arr) => {
    const pObj = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (arr.length > 2) {
                resolve("PROMISE RESOLVED")
            } else {
                reject("Something bad happened")
            }
        }, 2000)
    });
    return pObj;
}

// Consumer Code 01- then...catch

// const consumePromise = () => {
//     buildPromise([2, 3])
//         .then(function (response) {
//             console.log("FIRST THEN : ", response);
//             return "MY " + response;
//         })
//         .then(function (result) {
//             console.log("SECOND THEN : ", result);
//             return result + " SUCCESSFULLY"
//         })
//         .then(function (res) {
//             console.log("THIRD THEN : ", res);
//         })
//         .catch(function (error) {
//             console.error(error);
//         })
// }

// Consumer Code 02- async...await

// const consumePromise = async () => {
//     try {
//         let response = await buildPromise([1, 2])         // << wait till promise resolved
//         console.log(response);
//     } catch (err) {
//         console.error(err)
//     }
// }

// consumePromise()





// Create a 'delay' function that
// - accepts the 'ms' parameter
// - returns the promise object
// - if 'ms' is > 2000, then promise is resolved after 'ms' time
// - otherwise promise will be rejected
// - implement both promise consumer version
// - then...catch
// - async...await


const delay = (ms) => {
    const pObj = new Promise(function (resolve, reject) {
        if (ms > 2000) {
            setTimeout(() => {
                resolve("RESOLVED")
            }, ms)
        } else {
            reject("REJECTED")
        }
    });
    return pObj;
}

// const consumePromiseDelay = () => {
//     delay(2000)
//         .then(response => console.log(response))
//         .catch(err => console.error(err))
// }

const consumePromiseDelay = async () => {
    try {
        const response = await delay(1000);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
}

consumePromiseDelay()