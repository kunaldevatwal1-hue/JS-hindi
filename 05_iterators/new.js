const coding = ["js", "ruby", "java", "python", "cpp"]

// const value=coding.forEach( (item) => {
//     console.log(item)
//     return item
// })
// console.log(value)
// foreach cannot give return value

// ********Filter*********

const myNums=[1,2,3,4,5,56,8]

// const newNums=myNums.filter( (num) => num>3)

// const newNums=myNums.filter( (num) => {
//     return num<32
// })

// console.log(newNums)

const newNum=[]

// myNums.forEach( (num) => {
//     if(num>3){
//         newNum.push(num)
//     }
// })

// console.log(newNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBook= books.filter( (bk) => bk.edition > 2003)

userBook = books.filter( (bk) => {
    return bk.publish >= 1995 ||  bk.genre=='History '
})

console.log(userBook )