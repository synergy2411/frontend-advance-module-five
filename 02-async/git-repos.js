const btnGetRepos = document.querySelector("#btnGetRepos")
const txtInput = document.querySelector("#txtInput")
const repoListContainer = document.querySelector(".repo-list")

btnGetRepos.addEventListener("click", function () {
    fetch(`https://api.github.com/users/${txtInput.value}/repos`)
        .then(response => {
            return response.json()
        })
        .then(result => {
            repoListContainer.innerHTML = '';
            const repos = result.map(repo => repo.name);
            repos.forEach(repoName => {
                const liElement = document.createElement("li")
                liElement.innerHTML = repoName;
                repoListContainer.append(liElement)
            })
        })
        .catch(err => console.error(err))
})


// [ { name : "" }, {name: ""} , {name : ""}, ...]