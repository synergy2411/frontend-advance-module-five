const btnGetRepos = document.querySelector("#btnGetRepos")
const txtInput = document.querySelector("#txtInput")
const repoListContainer = document.querySelector(".repo-list")


// Case 01 - then ... catch
// btnGetRepos.addEventListener("click", function () {
//     fetch(`https://api.github.com/users/${txtInput.value}/repos`)
//         .then(response => {
//             return response.json()
//         })
//         .then(result => {
//             repoListContainer.innerHTML = '';
//             const repos = result.map(repo => repo.name);
//             repos.forEach(repoName => {
//                 const liElement = document.createElement("li")
//                 liElement.innerHTML = repoName;
//                 repoListContainer.append(liElement)
//             })
//         })
//         .catch(err => console.error(err))
// })

// Case 01 - async ...await
btnGetRepos.addEventListener("click", async function () {
    try {
        const response = await fetch(`https://api.github.com/users/${txtInput.value}/repos`);
        const result = await response.json();
        repoListContainer.innerHTML = '';
        const repos = result.map(repo => repo.name);
        repos.forEach(repoName => {
            const liElement = document.createElement("li")
            liElement.innerHTML = repoName;
            repoListContainer.append(liElement)
        })
    } catch (err) {
        console.error(err)
    }
})




// fetch("https://data.covid19india.org/v4/min/data.min.json")
//     .then(response => response.json())
//     .then(result => {
//         for (let key in result) {
//             console.log("STATE  :", key);
//             console.log("Total Population : ", result[key].meta.population)
//             console.log("Vaccinated 01", result[key].total.vaccinated1);
//             console.log("Vaccinated 02", result[key].total.vaccinated2);
//             console.log("**************************");
//         }

//     }).catch(console.log)

// [ { name : "" }, {name: ""} , {name : ""}, ...]

// Distrcit name :.....
// Total Population: ....

// Vaccinated 01 : ....
// Vaccinated 02 : ....


// camel_case -> camelCase