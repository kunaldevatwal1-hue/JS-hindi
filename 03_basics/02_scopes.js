//global scope
let a=10
var c=300

if(1){
    //local scope
    c=20
}
// reason why not to use var bca it doesnt follow scopes
// console.log(c)

function one(){
    const username="kunal"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(webiste)

    two()
}
one()

if(true){
    const username="kunal"
    if(username =="kunal"){
        const website="youtube"
        console.log(username + website)
    }
    // console.log(website)

}
// console.log(username)
console.log(addone(3))
function addone(num){
    return num +1
}

// addtwo(5).    // this is problem  (Cannot access 'addtwo' before initialization )

const addtwo = function(num){
    return num+2
}
