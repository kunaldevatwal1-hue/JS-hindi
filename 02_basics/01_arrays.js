// Arrays

let array=[32,4,"Kunal","true","false"]
// console.log(array)

// JavaScript array-copy operations create shallow copies.
//  (All standard built-in copy operations with
//  any JavaScript objects create shallow copies, rather than deep copies).

// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
//  as those of the source object from which the copy was made.

// A deep copy of an object is a copy whose properties do not share the same references 
// (point to the same underlying values) as those of the source object from which the copy was made.
//  As a result, when you change either the source or the copy, 
// you can be assured you're not causing the other object to change too; 
// that is, you won't unintentionally be causing changes to the source or copy that you don't expect. 
// That behavior contrasts with the behavior of a shallow copy, 
// in which changes to either the source or 
// the copy may also cause the other object to change too (because the two objects share the same references).

let myArr=[2,4,2,3,0]

 //Arrays methods
myArr.push(328) //insert element at last

myArr.pop()  

// myArr.upShft(9) //insert at first

// myArr.shift()



// console.log(myArr.includes(2))
// console.log(myArr.indexOf(0 ))

const newArr=myArr.join(); // join change its type to string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof new Arr)

//slice and splice
console.log("A", myArr)
const myn1=myArr.slice(2,4)

console.log(myn1);
console.log("A", myArr)

const myn2=myArr.splice(2,4) //it removes this part from original array & take lasst value too

console.log(myn2);
console.log("b ", myArr)



