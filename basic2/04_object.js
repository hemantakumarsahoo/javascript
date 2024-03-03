//const tinderUser=new Object()//it is a empty object and also it is a singleton object
const tinderUser={}//it is a non single ton object

tinderUser.id="123abc",
tinderUser.name="sam",
tinderUser.isLoggedin=false

//console.log(tinderUser);
//nesting object using .
const regularUser={
    email:"hks@gmail.com",
    fullName:{
        userFullName:{
            firstname:"hemanta",
            lsatname:"sahoo"
        }
    }
}
//console.log(regularUser.fullName)
//console.log(regularUser.fullName.userFullName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//method 1
//const obj4={obj1,obj2}
//method 2
//const obj4 =Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2}//spread method always use

console.log(obj4)

//important database data fetch
const user=[
    {
        id:1,
        email:"hks@"
    },
    {
        id:2,
        email:"sks@"
        
    },
    {
        id:3,
        email:"rks"
    }
]
// user[1].email
// console.log(Object.keys(tinderUser));// all seys are print in this
// console.log(Object.values(tinderUser));//all values are print
// console.log(Object.entries(tinderUser));//it return all key and value  become array return
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLoggedin"));// isLogged in property is avilablde so it return true

const course={
    coursename:"js hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor)//method1


//method2
// const{courseInstructor}=course

// console.log(courseInstructor);
//method3
const{courseInstructor:instructor}=course//destructure

console.log(instructor)
