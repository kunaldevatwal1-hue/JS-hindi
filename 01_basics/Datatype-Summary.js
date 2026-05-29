// Primitve
// sttring, Number, Boolean, Null, undefined, symbol, bigint

const id=Symbol('21')

const anotherId=Symbol('21');

console.log(id)
console.log(id== anotherId)

const bigNumber=1234567899876543123456789087654345678987654367854389876n

console.log(bigNumber)

// Reference (Non primitive)
// Array, Objects, Functions



const hero=["kunal", "Sumit", "Ayush"]

let myObj={
    name: "kunal",
    age: 23,
}

console.log(hero)

console.log(myObj )

const myFunction= function(){
    console.log("hello world "); 
}
console.log("return type of function is " ,typeof myFunction)

console.log("return type of bigint is" ,typeof bigNumber)

console.log("return type of symbol is" ,typeof id)

console.log("return type of array is" ,typeof hero )

// https://262.ecma-international.org/5.1/#sec-11.4.3