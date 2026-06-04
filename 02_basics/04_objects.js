//Singleton
const tinderUser=new Object()
// console.log(tinderUser )
//Non Singelton
const tinder={}

tinder.email="kunal@gmail.com"
tinder.id="123kd"
tinder.number=9343530179

// console.log(tinder)

const newObj={
    email: "kuanl@gpt.in",
    fullname:{
        userfirstName:{
            name:"Kunal"
        },
        userSecondName:{
            name:"devatwal"
        }
    }
}

// console.log(newObj.fullname.userfirstName.name)
// console.log(newObj.fullname.userSecondName.name)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3=Object.assign(obj1,obj2)      //assing to obj1
// console.log(obj1)

// const obj3=Object. assign({}, obj1,obj2)   //assing to {}
// console.log(obj3)

// console.log(obj1 == obj3)

const final={...obj1, ...obj2} 
// console.log(final);

// console.log(Object.keys(tinder))
// console.log(Object.values (tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty('id '))

const course={
    courseName: "js",
    price: 999,
    courseInstructor: "kunal"
}

const{courseInstructor : Instructor}=course

// console.log(courseInstructor)

console.log(Instructor)

// Example of JSON
/*
{
    "name":"kunal",
    "id": 001
}
    */
 