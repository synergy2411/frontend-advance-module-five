// function Student(studId, studName) {
//     this.enrolledCourse = 'Angular';
//     this.studId = studId;
//     this.studName = studName;
// }

// Student.prototype.getDetails = function () {
//     return `${this.studId} - ${this.studName} | Course : ${this.enrolledCourse}`
// }


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     getDetails() {
//         return this.name;
//     }
// }

// class Employee extends Person{
//     constructor(empId, empName){
//         super(empName)
//         this.empId = empId;
//     }
//     getEmpId(){
//         return this.empId;
//     }
// }

// class Student extends Person {

//     #course = 'Angular';

//     constructor(studId, studName) {
//         super(studName);
//         this.studId = studId;
//         // this.studName = studName;
//         this.enrolledCourse = this.#course;
//     }

//     get enrolledCourse() {
//         return this.#course;
//     }

//     set enrolledCourse(value) {
//         this.#course = value
//     }

//     // Overriding
//     getDetails() {
//         return `${this.studId} - ${super.getDetails()}
//         Course : ${this.enrolledCourse}`
//     }
// }

// let john = new Student("S001", "John Doe", "Angular");

// john.enrolledCourse = "React";

// console.log(john.getDetails())



// ARROW FUNCION LIMITATIONS

// 'arguments' keyword

// function add(n1, n2) {
//     console.log(arguments);         // keyword
// }
// add(2, 4)

// const sum = (n1, n2) => console.log(arguments)
// sum(2, 5)

// function Person (firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const Person = (firstName, lastName) => {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const john = new Person("John", "Doe")





// REST OPERATOR
// - creates the collection from individual elements

// const sum = (...args ) => {
//     const arraySum = args.reduce((acc, curr) => acc += curr)

//     return arraySum;
// }

// console.log(sum(2, 4, 5, 6, 7, 8, 9))

// SPREAD OPERATOR
// - splits the collection into individual elements



// let numbers = [2, 3, 4, 5, 6];

// const sum = (n1, n2, n3) => {
//     return n1 + n2 + n3;
// }


// console.log(sum(...numbers));


// let numbers = [3, 4, 5];

// let newNumbers = [1, 2, ...numbers];

// console.log(newNumbers);            // [1,2,[3,4,5]]



// let userOne = {
//     email: "john@test",
//     age: 32,
//     address: {
//         city: "Bengaluru",
//         street: "201 Main Road, Marathahalli"
//     }
// }

// DEEP COPY
// const userTwo = JSON.parse(JSON.stringify(userOne))

// userTwo.address.city = "Mumbai";

// console.log(userOne);



// SHALLOW COPY
// let userTwo = {
//     ...userOne,
//     ...userOne.address
// }

// userTwo.address.city = "Hyderabad";

// console.log(userOne);



// CREATES SHALLOW COPY AGAIN
// let userTwo = {
//     ...userOne,
//     age: 34
// }

// userTwo.email = "jenny@test";

// userTwo.address.city = "Pune";

// console.log("USER TWO : ", userTwo);
// // { email, age : 34, address : {city , street }}


// console.log("USER ONE : ", userOne);


// let users = [
//     {email : "john@test", age : 32},
//     {email : "jenny@test", age : 34},
//     {email : "jill@test", age : 36}
// ]









// DESTRUCTURING

//  - ARRAY: Creates SHALLOW copy

// let fruits = ["apple", "banana", "grapes", "kiwi"];

// let [, f2, f3, f4, f5] = fruits;

// console.log(f2);

// fruits[1] = "orange";

// console.log(f5)              // ?

// let friends = [
//     { name: "Monica", age: 29 },
//     { name: "Joe", age: 30 },
//     { name: "Ross", age: 31 },
// ]


// let [f1, f2, f3] = friends;

// f1.name = "Rachel";

// console.log(friends);



// OBJECT - unorganized

// let userOne = {
//     name: "John Doe",
//     age: 32
// }

// let userTwo = {
//     name: "Jenny Doe",
//     age: 34
// }

// let { name: n2, age: a2 } = userTwo;

// let { name: n1, age: a1 } = userOne;

// console.log(n2, a1);                // ?


// let user = {
//     email : "john@test",
//     isAdmin : true,
//     address : {
//         city : "Pune",
//         street : "201 Main Road, Wakad"
//     },
//     friends : ["Monica", "Joe"]
// }

// let {
//     email,
//     isAdmin,
//     address : {
//         city,
//         street
//     },
//     friends : [f1, f2]
// } = user;

// let friends = [
//     {name : "Monica", age : 28},
//     {name : "Joe", age : 29},
//     {name : "Ross", age : 30}
// ]

// let [
//     {name : n1, age : a1},
//     {name : n2, age : a2},
//     {name : n3, age : a3},
// ] = friends;









// let obj = {
//     key: "value"
// }

// let user = {
//     "name": "John",
//     age: 32,
//     true: 1,
//     101: "pages",
//     obj: "value 1"
// }


// console.log(user);

// MAP
// - object keys are always strings, but map's need not.
// - provides API to deal with map object
// - maps are iterables
// - is source object (key) is deleted, 
// there will not be any associated data in map



// let user = {
//     id: "u001"
// }

// let map = new Map();

// map.set("name", "John Doe")
// map.set("age", 32)
// map.set(101, "number of pages")
// map.set(true, "this is admin")
// map.set(user, "John Doe")


// console.log(map.size);          // 

// console.log(map.get(101));

// console.log(map.get(true));

// console.log(map.get(user));

// user = null;

// console.log(map.get(user));         // << undefined


// let map = new Map()

// map.set("name", "John");
// map.set("email", "John@test");
// map.set("age", 32);


// if (map.has("name")) {
//     console.log("Do something");
// } else {
//     console.log("Do something else");
// }


// map.delete("name");

// console.log(map.size);          // ?

// map.clear();
// console.log(map.size);          // << ?


// for (let [key, value] of map) {
//     console.log(key + " - " + value);
// }



// SET
// - allows only unique values

let obj = {
    id: "o001"
}

let set = new Set();

set.add("john")
set.add("jenny")
set.add("jill")
set.add("john")
set.add(obj);


console.log(set.size)

obj = null;

console.log(set.size);

for (let value of set) {
    console.log(value);
}
