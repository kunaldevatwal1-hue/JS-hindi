function randomcolor(){
    let hex="0123456789ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random() * 16)]
        
    }
    return color;
}
let intervalid;
const startChangingcolor=function(){
    
    let change=function(){
        document.body.style.backgroundColor = randomcolor();
    } 
    if(!intervalid){
        intervalid=setInterval(change,2000);
    }
    
};
const stopChangingcolor=function(){
    
    clearInterval(intervalid)
    intervalid=null;
}
document.querySelector('#start').addEventListener('click',startChangingcolor)
document.querySelector('#stop').addEventListener('click',stopChangingcolor)
