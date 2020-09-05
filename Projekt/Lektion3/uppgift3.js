/*
let i = 25;
if ( i  == 20);
{
    console.log("Hello");
}
*/
/*
const i = 20;

console.log(i);

i = 45;

console.log(i);
*/
/*
console.log(1 == "1");
console.log(1 === "1");
*/

class Person
{
    constructor(name_person, age_person)
    {
        this.name = name_person;
        this.age = age_person;
        console.log("Creating new Person");
    }
}

class Student extends Person{
    constructor(name_student, age_student, subject_student)
    {
        super(name_student, age_student, subject_student);
        this.subject = "Webb20";
        console.log("Creating new Student");
    }
}

let person1 = new Person("Dragan", 28);
console.log(person1);

let student1 = new Student("Micke", 43);
console.log(student1);