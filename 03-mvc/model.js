export class Todo {
    getData() {
        let pObj = new Promise(function (resolve, reject) {

            fetch("https://jsonplaceholder.typicode.com/todos")
                .then(response => response.json())
                .then(todos => {
                    resolve(todos)
                }).catch(err => reject(err))

        })

        return pObj;

    }
}