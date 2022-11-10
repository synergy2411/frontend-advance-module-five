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

const consumePromise = async () => {
    try {
        let response = await buildPromise([1, 2])         // << wait till promise resolved
        console.log(response);
    } catch (err) {
        console.error(err)
    }
}

consumePromise()