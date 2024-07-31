// object Destructing
const person={
    firstName:"chan",
    lastName:"drakanth",
    parent:{
    father:'prakash',
    mother:'srividhya'},
    age:20,
    getFullName(){
        return(this.firstName+this.lastName);
    },
}
const person2={
    firstName:"chan",
    lastName:"drakant",
    parent:{
    father:'prakash',
    mother:'srividhya'},
    age:20,
    getFullName(){
        return(this.firstName+this.lastName);
    },
}  

function diasplayUser(personObj){
    console.log(`hello my name is ${personObj.firstName}${personObj.lastName} and my age is ${personObj.age}`)
}
function diasplayUser1(firstName,lastName,age){
    console.log(`My name is ${firstName}and my lastname${lastName} and my age is ${age}`)
}
diasplayUser(person)
diasplayUser1(person)
// const={oldName:newName,properties}=objecto
// if u want to change the variable name then you have to write like the "firstName:myFirstName"
const{firstName,lastName,parent,age : personAge,favColour="red"}=person// if you want to call the property by the name itself u need to use this or else it won't work
console.log(person.getFullName());
console.log(firstName+lastName);// which used to join the code
console.log(parent,'\n',favColour,'\n',personAge);
// rest operator 
const{firstName:firstName2,lastName:lastName2 ,...restthings}=person2
// if u console the same name twice then the error will happen example lastName is twice so we need to change the variable name
console.log(firstName,lastName)  




