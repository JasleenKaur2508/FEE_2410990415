//function declaration
function greet(){
    console.log("hi!")
}
greet();

//function expression (variable mai function store)
/* const greet = function(){
    console.log("hi");
};
greet();*/

const result = function(a,b){
    return a+b;
}
console.log(result(8,9))

//arrow functions
const add = (a,b) => a+b;
console.log(add(5,3));

//anonymous function (ek baar execute krana ho jo function)

//iife (turant call hota hai function)

//default parameters
function hi (name = "guest"){
    return `hello, ${name}`;
}
console.log(hi());
console.log(hi("saket"));

//global and local
let name = "jaz";  
function bye() {
    let greeting = "Hello";  
    console.log(greeting); 
}
bye();  
console.log(name);      
//console.log(greeting);   

//arrays
let marks = [90, "hi", true, 45.6, null, {name: "ram"}, [1,2,3]];
console.log(marks);

//slicing
let fruit = ["apple", "banana", "mango", "orange", "grape"];
let citrus = fruit.slice(3);
console.log(citrus);  // ["orange", "grape"]


//arrays push pop
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
console.log(fruits);  // ["apple", "banana", "mango", "orange"]
fruits.pop();
console.log(fruits);  // ["apple", "banana", "mango"]
//arrays shift unshift
fruits.shift();
console.log(fruits);  // ["banana", "mango"]
fruits.unshift("kiwi");
console.log(fruits);  // ["kiwi", "banana", "mango"]

//array concatenate
let animals = ["dog", "cat"];
let moreAnimals = ["rabbit", "hamster"];
let allAnimals = animals.concat(moreAnimals);
console.log(allAnimals);  // ["dog", "cat", "rabbit", "hamster"]

//array spread
let animal = ["dog", "cat"];
let moreAnimal = ["rabbit", "hamster"];
let allAnimal = [...animal, ...moreAnimal];
console.log(allAnimal);  // ["dog", "cat", "rabbit", "hamster"]

//splice
let no = [1,2,5,6];
no.splice(2,0,3,4);
console.log(no);

//map
let number = [1,2,3];
let squares = number.map(num => num*num);
console.log(squares);

