
function login1(username){
    if(!username){
        console.log(`please enter username`)
        return 
    }
    return `${username } just logged In`
}

function login(username="kunal"){         //if we initi parameter then if we cant passs anything then deafault value is give
    return `${username } just logged In`
}

// let a=login("kash")
// console.log(a)

// let b=login1()
// console.log(b)

function add(num1,num2){
    if((typeof num1==="number") && (typeof num2==="number")){
                return num1+num2
    }
    
    return `enter valid values`
}

let l=add(3,8)
// console.log(l)

// ... is rest operator which is used to take as many number with just one permater
function calculateCartPrice(...num1){
    return  num1
}

// console.log(calculateCartPrice(34,532,4,556,224,42))

// after 2 values all vlaues goes to num1 array
function calculateCartPrice(val1,val2,...num1){
    return  num1
}

// console.log(calculateCartPrice(34,532,4,556,224,42))

const user = {
    username: "kunal",
    price: 50000
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//if a function doesn't explicitly return a value, it returns undefined 
// console.log(handleObject(user))
// handleObject(user)

handleObject({
    username: "MIRA BHUA",
    price: 34273819
})
// console.log(handleObject(user))

const myNewarray=[210,120,329,392]

function return2ndValue(array){
    return array[1]
}

// console.log(return2ndValue(myNewarray))

console.log(return2ndValue([23,423,423,12]))