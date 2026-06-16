// const promisOne = new Promise(function(resolve,reject){

//     //Do an async task
//     //  calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete')
//         resolve()
//     },1000)
    
// })

// promisOne.then(function(){
//     console.log(`"promise consumed"`)
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task 2 ")
//         resolve()
//     },3000)
// }).then(function(){
//     console.log("task 2 is consumed")
// })

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username: "Kunal dewatwal",
        email: "kunaldevatwal1@gmail.com"
        })
    },2000)
})

promiseThree.then(function(e){
    console.log(e)
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=1;
        if(!error){
            resolve({
            username: "Kunal ",
        email: "kunaldevatwal1@gmail.com"
        })
        }else{
            reject("Something went worng")
        }
    },1000)
}
)

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((e) => {
    console.log(e)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Somthig went either reject or accept")
})

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=1;
        if(!error){
            resolve({
            username: "Kunal devawal",
        password: "123"
        })
        }else{
            reject("Something went snck worng")
        }
    },1000)
}
)

async function consumepromiseFive(){
    try{
        const response= await promiseFive
    console.log(response)
    }catch(error){
        console.log(error)
    }
    
}

consumepromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((response) => (console.log(response)))
.catch((error) => (console.log(error)))