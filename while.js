// this is the while loop using the let 

let i = 0;
while (i <= 5) {
    if (true) {
        let j = 'inside block';
    }
   // console.log(j); // ReferenceError: j is not defined, because let is block-scoped
    i++;
}
// this the while loop using the var 
var t = 0;
while (t <= 5) {
    if (true) {
        var l = 'inside block';
    }
    console.log(l); // Accessible because var is function-scoped
    t++;
}

// this is the do while loop
let u=5;
do{
    console.log("chandrkanth");
    u++;
}while(u<=1)

// this is the for loop
let y=0;
 for(;y<=5;y++){
    console.log(y);
 }

for(r=0;r<=5;r++){
    console.log(r)
}






