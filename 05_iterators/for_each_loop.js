const coding =["js", "cpp", "java"]

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach( (key) => {
//     console.log(key);
// })

function printme(value){
    console.log(value)
}

// coding.forEach(printme)

coding.forEach((key,index,arr) => {
    // console.log(key,arr,index)
})

const Mycoding =[
    {
        languageName: "Javascript",
        languagefilename: "js"
    },
    {
        languageName: "Java",
        languagefilename: "java"
    },
    {
        languageName: "ruby",
        languagefilename: "rb"
    },
    {
        languageName: "C++",
        languagefilename: "cpp"
    }

]

Mycoding.forEach( (item) => {
    console.log(`${item.languageName} file name is ${item.languagefilename }`)
} )