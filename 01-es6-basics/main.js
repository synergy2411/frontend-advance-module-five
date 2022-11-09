// function Student(studId, studName) {
//     this.enrolledCourse = 'Angular';
//     this.studId = studId;
//     this.studName = studName;
// }

// Student.prototype.getDetails = function () {
//     return `${this.studId} - ${this.studName} | Course : ${this.enrolledCourse}`
// }


class Person {
    constructor(name) {
        this.name = name;
    }

    getDetails() {
        return this.name;
    }
}


class Student extends Person {

    #course = 'Angular';

    constructor(studId, studName) {
        super(studName);
        this.studId = studId;
        // this.studName = studName;
        this.enrolledCourse = this.#course;
    }

    get enrolledCourse() {
        return this.#course;
    }

    set enrolledCourse(value) {
        this.#course = value
    }

    // Overriding
    getDetails() {
        return `${this.studId} - ${super.getDetails()}  
        Course : ${this.enrolledCourse}`
    }
}

let john = new Student("S001", "John Doe", "Angular");

john.enrolledCourse = "React";

console.log(john.getDetails())
