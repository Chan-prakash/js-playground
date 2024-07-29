const person={
    // key:value
     id:4,
     firstName:'Chandrkanth',
     lastName:'Prakash',
     age:19,
  }
   const person2={ // if u miss the comma u will get the error
      id:2,
      firstName:"Priya",
      lastName:'Alagappan',
      age:18,
      sayhello:function(){
          console.log("Hi I am chandrakanth ")
      },
       saybye:function(){
          console.log("I am chandrakanth Prakash")
       }
   }
   const person3={}
   person3.firstName='Srividhya';
   person3.lastName='Prakash';
   person3.age=51;
   person3.id=26;
  
   const user = new Object();
   user.firstName='Prakash';
   user.lastName='Ponnusamy';
   user.id=18;
   user.age=51;
  
   const myobjects={ a:5,b:6}
   myobjects.a=8;
   //myobjects={ a:9,b:6 };// this will causes an type error
  
   const profile = {
      hobbies: [ 'chess','football','carrom'],
      parent:{
          father:'ramanujam',
          mother:'saraswathi',
  
      }
   }
  
  
  // Assign the method to person object

  const personMethods = {
    yearOfBirth() {
        if (typeof this.age === 'number') {
            console.log(2024 - this.age);
        } else {
            console.log('Age is not defined or not a number');
        }
    },
};// Test the method on person2 which doesn't have the method initially
const person4 = {
    name: 'John Doe',
    age: 20,
};
  // Assign the method to person object
  
Object.assign(person3, personMethods);

// this the different type
/*
const personMethods = {
    yearOfBirth() {
        if (typeof this.age === 'number') {
            console.log(2024 - this.age);
        } else {
            console.log('Age is not defined or not a number');
        }
    },
};

const person1 = {
    name: 'John Doe',
    age: 30,
    ...personMethods
};

person1.yearOfBirth();*/

// object cloning
const objectCopied= Object.assign({},person);
console.log(objectCopied)
  
  console.log(profile.hobbies); // Outputs: ['chess', 'football', 'carrom']
  console.log(profile.parent.father); // Outputs: 'ramanujam'
  console.log(myobjects); // Outputs: { a: 8, b: 6 }
  console.log(user.firstName); // Outputs: 'Prakash'
  console.log(person3.firstName + " " + person3.lastName); // Outputs: 'Srividhya Prakash'
  console.log(person.lastName); // Outputs: 'Prakash'
  
  person2.saybye(); // Outputs: 'I am Chandrkanth Prakash'
  //person.yearOfBirth(); // Outputs: 2005 (2024 - 19)
  
  // Testing on person2
  person3.yearOfBirth(); // Outputs: 2006 (2024 - 20)
  
  