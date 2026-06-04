//Immediate Invoked Function Expression


(function chai(){
    //named iife
    console.log(`db connected`)
})();
//for two iife use ; after first iife
// global scope ke variable ke pollution se dikkat hote hai use htane  ke liye humne iife ka use kiya
// (function defination)(execuiton call) above syntax

((name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
})("kunal")