// singleton
// Object.create

//Object Literal

const mySem= Symbol("key1")
const Juser = {
    name: "kunal",
    age: new Number(23),
    "fullname": "kunal devatwal",
    email: "kunal@google.com",
    [mySem]:"key2",  //for using is as a symbol we have to assign key in square brackets
    location: "Raipur",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Friday"]
 
}

// console.log(Juser.name)
// console.log(Juser["lastLoggedIn"])
// console.log(Juser["isLoggedIn"])
// // console.log(Juser.fullname). worng way bcZ fullname is in ""
// console.log(Juser["fullname"])

// console.log(Juser[mySem])

Juser.email="kunal@gpt.com"
// Object.freeze(Juser) //after that we cant able to change Juser object
Juser.email="kunal@microsft.com"
// console.log(Juser)

Juser.greeting=function(){
    console.log("Hello js user")
}

Juser.greetingtwo=function(){
    console.log(`Hello Js user ${this.fullname}`)
}

console.log(Juser.greeting())
console.log(Juser.greetingtwo())

  