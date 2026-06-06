const myNums=[1,2,3]

// const mytotal=myNums.reduce(function (acc,currval){
//     console.log(`acc is ${acc} and their current value is ${currval}`)
//  return acc+currval
// },0)

const mytotal=myNums.reduce((acc,currval) => acc+currval,0)

console.log(mytotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 399
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalvalue=shoppingCart.reduce( (acc,item) => {
    if(typeof item.price == "number")
        return acc+item.price
},0)

console.log(totalvalue)

const show=shoppingCart.filter( (num)=>{
    return num.price>999 && num.price<5000
})

console.log(show)