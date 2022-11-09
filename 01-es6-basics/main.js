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



let userOne = {
    email: "john@test",
    age: 32,
    address: {
        city: "Bengaluru",
        street: "201 Main Road, Marathahalli"
    }
}


const userTwo = JSON.parse(JSON.stringify(userOne))

userTwo.address.city = "Mumbai";

console.log(userOne);

// let userTwo = {
//     ...userOne,
//     ...userOne.address
// }

// userTwo.address.city = "Hyderabad";

// console.log(userOne);

// CREATES SHALLOW COPY

// let userTwo = {
//     ...userOne,
//     age: 34
// }

// userTwo.email = "jenny@test";

// userTwo.address.city = "Pune";

// console.log("USER TWO : ", userTwo);
// // { email, age : 34, address : {city , street }}


// console.log("USER ONE : ", userOne);


// Deep copy and Shallow Copy