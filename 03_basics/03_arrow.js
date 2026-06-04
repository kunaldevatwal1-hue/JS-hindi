const user ={
    username: "kunal",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this) //it gives current context
    }
}

// user.welcomeMessage()
// user.username="GL"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="kunal"
//     console.log(this.username)//only works in object
// }
// chai()

// const chai=function(){
//     let username="kunal"
//     console.log(this.username)//only works in object
// }

const chai = () =>{
    let username="kunal"
    console.log(this.username)//only works in object
}
 
// chai()


// const addtwo = (num1,num2) => {.    //in curely braces we have to use return 
//     return num1+num2//explicit
// }

// const addtwo = (num1,num2) =>   num1+num2
//in this we dont need return //impicit
// const addtwo = (num1,num2) =>  ( num1+num2)

const addtwo = (nums1,nums2) => ({username: "kunal"})//to use objects

console.log(addtwo(3,4))

const myArray=[2,34,2,2]

