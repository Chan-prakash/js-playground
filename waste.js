const foods = [
    // Key: value pairs as objects
    { id: 1, title: "Biryani", type: "Non-Veg" },
    { id: 2, title: "Sambar", type: "Veg" },
    { id: 3, title: "Dosa", type: "Veg" },
    // Note: In JavaScript objects, keys should always be strings or symbols
];
console.log(foods[0].title); // Output: Biryani

// Using Map to store key-value pairs where keys can be of any type
const myMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);

// Adding more key-value pairs to the Map
myMap.set(1, "India");
myMap.set(2, "China");
myMap.set(3, "USA");
myMap.set(4, "UA");
myMap.set(5, "Russia");

// Defining a function to use as a key
function mymap() {}

// Setting a value using a function as the key
myMap.set(mymap, "all country");

// Retrieving and logging values from the Map
console.log(myMap.get(2)); // Output: China
console.log(myMap.get(mymap)); // Output: all country
console.log(myMap)