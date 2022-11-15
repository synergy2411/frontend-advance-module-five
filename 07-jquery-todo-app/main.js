$(document).ready(function () {

    $("button").on("click", function (event) {
        event.preventDefault();
        let txtTodoInput = $("#txt-todo-input").val()
        $.post("http://localhost:3000/todos", {
            label: txtTodoInput
        }, function (data, status) {
            if (status === 'success') {
                alert("Created!")
                fetchTodo()
            }
        })
    })


    const fetchTodo = () => {
        $.get("http://localhost:3000/todos", function (data, status) {
            if (status === 'success') {
                $("#todo-container").empty()
                data.forEach(todoItem => {
                    $("#todo-container").append(`<li class='list-group-item'>${todoItem.label}</li>`)
                })
            }
        })
    }

    fetchTodo()
})

// live-server - 5500
// json-server - 3000