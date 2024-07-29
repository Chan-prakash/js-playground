// for loop

for (let j = 0; j <= 5; j++) {
    console.log(j);
}

let l = 0;
for (; l <= 10; l++) {
    console.log(l);
}
// for in loops
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x] + "\n";
    console.log(person[x]);
}

console.log(typeof(text));

 // for each loop

Object.values(person).forEach((value) => {
    console.log(value);
});

// for of loop 
const set=new Set([1,2,3,4,5]);
for(let value of set){
    console.log(value);
}

const letters = new Set(["a","b","c"]);

// Create an Iterator
const myIterator = letters.values();

// List all Elements
let texts = "";
for (const x of myIterator) {
  texts += x + "\n";
}
console.log(texts)

 let tex= "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  tex += "The number is " + i + "\n";
}

console.log(tex)
 
let i= "0"; // you can see the diffence between them
if(i===0 ){
    console.log("true")
}
else{
    console.log("false")
}
const cars = ["BMW", "Volvo", "Saab", "Ford"];
te="";
list: {
  te += cars[0] ;
  te += cars[1]  ;
  break list;
  te += cars[2] + "<br>";
  te += cars[3] + "<br>";
}

console.log(te)