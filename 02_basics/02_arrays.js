const marvelHeros=["Hulk","Ironman","thor"]
const dcHeros=["supermen","flash","batman "]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros[3])

// console.log(marvelHeros.concat(dcHeros)) //Combines two or more arrays. This method returns a new array without modifying any existing arrays. 
// console.log(marvelHeros)

//  const allNewHeros=[...marvelHeros,...dcHeros] //spread like dropping a glass 
//  console.log(allNewHeros)

let real_arr=[3,5,6,78,2,[3,5,2],[43,4,[32,53,2[4,32[4,5,4[53]]]]]]

let another_real_arr=real_arr.flat(Infinity)

console.log(another_real_arr)

console.log(Array.isArray("Kunal"))
console.log(Array.from("Kunal"))
console.log(Array.from({name: "kunal"})) //inertestting 

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))