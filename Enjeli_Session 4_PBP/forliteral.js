let student = {
    name : "Apriady Armansyah",
    age : 22,
    address : "Korea"
}

//Accessing with iteration declarative
for(let key in student){
    console.log(`${key}: ${student[key]}`);
}

//Destructuring
let {name,age,address} = student
console.log(`Name : ${name}`);
console.log(`Age : ${age}`);
console.log(`Address : ${address}`);

//Print out wirh static method
console.log(Object.keys(student)); 

