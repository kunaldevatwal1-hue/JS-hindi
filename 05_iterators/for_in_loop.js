const Myobject={
    js: "javasciript",
    cpp: "c++",
    swift: "swift of apple"
}

for(const key in Myobject){
    console.log(`${key} is shortcut for ${Myobject[key]}`)
}

const arr=[2,3,5,6,7]

for(const key in arr){
    console.log(arr[key])
}