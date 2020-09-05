/*
let kurs = {
    elever: "20",
    namn: "frontend 1",
    larare: "Mikael",
    termin: "HT"
}
console.log(kurs);
//kurs.amne = "Frontend 1";
//kurs.larare = "Mikael Olsson";
//kurs.start = "2020/08/28";
//kurs.
*/
/*
function calculateRectangleCircumference (a, b)
{
    return (2 * a) + (2 * b);
}

let result = calculateRectangleCircumference(10, 12);
console.log("Omkretsen är: " + result);

console.log("Omkretsen är: " + calculateRectangleCircumference(10, 12));
*/
/*
let person = 
{
    name: "Dragan",
    age: 28,
    shoeSize: 20
}

console.log(person);
*/
/*
let a = 4;
let b = "Vita Mea";
let c = {
    name: "Sälg",
    age: 28
}

let arr = [a, b, c];

console.log(arr);

a = 10;
b = "Mors Tua";
c.name = "Dragan";
c.age = 29;

console.log(arr);
*/
/*
var person = 
{
    name: "Kalle",
    age: 22
}

person = 
{
    firstName: "Dragan",
    age: 33
}

console.log(person);
*/
/*
class person{
    constructor() 
    {
        this.name = "Dragan";
        this.age = 28;

        console.log("Skapar ett objekt av klassen person")
    }
}

let student = new person();

student.name = "Sälg";
student.age = 29;

console.log(student);
*/
/*
class elonmuskschild
{
    constructor()
    {
        this.engine = "FTL-9000";
        this.wheels = 77;
        this.IQ = 1337;
        this.Evolutionsteps = 90;
    }
    increaseEvolutionsteps(x)
    {
        let evolutionsteps = this.Evolutionsteps + x;
        if (evolutionsteps >= 150)
            {
                console.log("You have reached the speed limit!");
            }
            else if (this.Evolutionsteps < 35)
            {
                console.log("Your speed is too low!");
                this.Evolutionsteps = 35;
            }
            else
            {
                this.Evolutionsteps = evolutionsteps;
            }
    }
}

let breed = new elonmuskschild
let breed2 = new elonmuskschild

breed.engine = "FTL-10000";
breed.wheels = 77;
breed.IQ = 1337;
breed.increaseEvolutionsteps(10);

breed2.engine = "FTL-12000";
breed2.wheels = 120;
breed2.IQ = 9001;
breed2.increaseEvolutionsteps(40);

console.log(breed);
console.log(breed2);
*/


/*
class elonmuskschild
{
    constructor()
    {
        this.engine = "FTL-9K";
        this.wheels = 77;
        this.IQ = 1337;
        this.Evolutionsteps = 12;
    }
    increaseEvolutionsteps(max)
    {
        max += max + 35;
        if (max >= 150)
        max == 150;
    }
}

let breed = new elonmuskschild();
breed.engine = "FTL-9K";
breed.wheels = 77;
breed.IQ = 1337;
breed.increaseEvolutionsteps = 130;

console.log(elonmuskschild);
*/
//inte högre speed än 150, inte under 0.
//increase speed, decrease speed. +5 speed, -5 speed.

/*
class Vehicle
{
    constructor(car_make = "Volvo", car_model = "V70")
    {
        this.make = car_make;
        this.model = car_model;
        this.speed =50;
    }

    increaseSpeed(x)
    {
        if ((this.speed + x) <= 150)
        this.speed += x;
    }
    decreaseSpeed(x)
    {
        if ((this.speed - x) >= 0)
        this.speed -= x;
    }
}

let car = new Vehicle();
car.increaseSpeed(135);
console.log(car);

car.increaseSpeed(10);
console.log(car);

car.increaseSpeed(10);
console.log(car);

car.decreaseSpeed(100);
console.log(car);

car.decreaseSpeed(90);
console.log(car);

car.decreaseSpeed(70);
console.log(car);
*/