import { Todo } from './model.js';
const btnGetData = document.querySelector(".btnGetData");
const container = document.querySelector(".list-container")
let todo = new Todo();


btnGetData.addEventListener("click", function () {
    todo.getData().then(todos => {
        todos.forEach(todo => {
            const li = document.createElement("li")
            li.innerHTML = `${todo.title}`
            container.append(li);
        })
    }).catch(err => console.error(err))
})