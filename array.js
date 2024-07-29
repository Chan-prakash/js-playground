const thingsInMind1 =new Array('sleeping','eating')// array constructor

// object we use the { }
const thingsInMind = ['apple','banana' ] // array literals

console.log( thingsInMind,thingsInMind1)

// both the method are the way to create the array but the last one is mostly is prefered

const myfavThings=['chan',[26,25,30], 'priya' ]// this array consist of multiple data types
// to find the lenght of the array
console.log( myfavThings.length)

console.log(myfavThings[1])

// property or called using the .dot operator

const fruits=['apple','facebook', 'google','netflix'] // this is know as the string of arrays 
const users = [
{
    id:1,
    firstName: 'chandrakanth',
    lastName:'prakash',
},{
    id:2,
    firstName:'priya',
    lastName:'alagppan',
}
]

console.log(users[0].firstName)

// when u try to insert the index larger than ithe valiable it will bw take that as the empty example: array consit of the  only the three v
//value but when u insert the index 6 the the inetween value will be empty and also considerd as the length


// for each to run each time
fruits.forEach((fruit)=>{
    console.log(fruit.toLocaleUpperCase())
})

console.log(fruits) // of you need ur valuw ith the comma seperate u canuse this

// pushing /updating  to existing code
fruits.push('Grapes','seethapalam')

console.log(fruits)

// to add the fruits in the starting la vranum means use the "unsift"
fruits.unshift("peaches")
console.log(fruits)

// stack concept use to remove the last element from the array 
const removedFruits=fruits.pop()
console.log(removedFruits)


 console.log( fruits )

 // to remove the first elemnt you can use the "shift" command 
 const firstLetter= fruits.shift() 
 console.log(fruits)
 console.log(typeof(users))

 // javascript maps
 //prototype.map()--used to create an array by applaying a provided function to each elemnt of the existing array.


const vegetable=[ 'bottleguard','snakeGuard','bringal',"lady's finger"];
 vegetable.forEach((vegetables)=>{
     console.log(vegetables.toLocaleUpperCase())

 }),
console.log(vegetable);

// map
 
 const vegetableChanged = vegetable.map((vegetables)=>{
    return (vegetables.toLocaleUpperCase())

 })
  console.log(vegetableChanged)

  // how to multiply each the element 
   numbers=[1,2,3,4,5,6]
   // this the other method to use the map
   const calculation=numbers.map((number)=> number*2) // you need to assign it to something like the calculation

   console.log(calculation)

   

