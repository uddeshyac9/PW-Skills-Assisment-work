const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// console.log(car);

//using for in loop 
// for (const key in car) {
//     console.log(`${key}: ${car[key]}`);
// } 

// Using Object.keys() and forEach() loop
Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`);
});
// Output :
//  make: Toyota
// model: Camry
// year: 2022