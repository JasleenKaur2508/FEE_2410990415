//1
let laptop = {
    brand: "Dell",
    price: 55000,
    isAvailable: true
};
console.log("Brand:", laptop.brand);
console.log("Price:", laptop.price);
console.log("Available:", laptop.isAvailable);

//2
let employee = {
    name: "John",
    position: "Developer",
    salary: 50000
};
employee.salary = 60000;
employee.department = "IT";
delete employee.position;
console.log(employee);

//3
let user = {
    name: "Anita",
    contact: {
        email: "anita@example.com",
        phone: "9876543210"
    }
};
console.log("Email:", user.contact.email);
console.log("Phone:", user.contact.phone);

//4
let movie = { 
    title: "Inception", 
    year: 2010, 
    rating: 8.8 
};
let jsonString = JSON.stringify(movie);
console.log("JSON String:", jsonString);
let movieObject = JSON.parse(jsonString);
console.log("Back to Object:", movieObject);
