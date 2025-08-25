//1
let celsius = 25; 
let fahrenheit = (celsius * 9/5) + 32;
console.log(fahrenheit);

//2
let principal = 10000;  
let rate = 5;           
let time = 2;           
let simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest);

//3
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);

//4
let radius = 7; 
let area = Math.PI * radius * radius;
console.log(area);

//for in
let faculty = {
    name: "john",
    age: 39,
    course: "btech"
};
for(let prop in faculty){
    console.log(prop, ":", faculty[prop]);
}

let abc = "course";
console.log(faculty.abc);
console.log(faculty[abc])
console.log(faculty.name)

//for of (iterable ke liye used)
let array = [3,4,5];
console.log(typeof array[Symbol.iterator])

let obj = {
    1:"a",
    2:"b",
};
console.log(typeof obj[Symbol.iterator])

let string = "hi"
console.log(typeof string[Symbol.iterator])

let fruits = ["apple", "banna"];
for(let fruit of fruits){
    console.log(fruit);
}

//1 
let num=5;
if(num>0){
    console.log("Positive number");
}else if(num<0){
    console.log("Negative number");
}else{
    console.log("Zero");
}

//2
for(let i=1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i + " is even");
    } 
}

//3
let day =3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//4
const n=Math.floor(Math.random() * 100) + 1;
console.log("Random number:", n);
let attempts = 3;

while (attempts > 0) {
    let guess = parseInt(prompt("Enter your guess (1-100):"));
    if (guess === n) {
        console.log("Congratulations! You guessed the number.");
        break;
    } else {
        attempts--;
        console.log("Wrong guess. Attempts left:", attempts);
    }
}

if (attempts === 0) {
    console.log("Sorry, you've used all your attempts. The number was:", n);
}


