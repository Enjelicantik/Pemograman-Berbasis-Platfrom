let person = {
    name : {
        firstname : "Enjeli",
        lastname : "Enjeli"
    },
    age : 21,
    address : "Hongkong",
    hobby : ["Singing", "Watching", "Hiking"],
    infoperson : function(){
        return(
            `name ${person.name.firstname}\n Age : ${person.age}`
        )
    }
}
console.log(person.infoperson());

//Output
console.log(person.hobby[1])

//Accessing Object output will be "Enjeli"
console.log(`name : ${person.name.firstname}`);
console.log(`name : ${["name"]["lastname"]}`);

//Add key ande values
person["idnumber"] = 1
console.log(person);

//Change the values of object - name : legend
person["name"]["firstname"] = "legend"
console.log(person);

//Accessing data object with iteration using for..in
for(let key in person){
    console.log(key);
}
