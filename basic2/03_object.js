//object literals
const mysym=Symbol("key1")

const jsuser={
    name:"hks",
    "fullname":"hemantakumar",
    [mysym]:"mykey1",
    age:23,
    location:"jaipur",
    email:"hks@gmail.com",
    isLoggedIn:false,

}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["fullname"])
console.log(jsuser[mysym])//it is a symbol data type so we can not declare with ""
//value changes in object
jsuser.email ="sks@gmail.com"
console.log(jsuser.email)
// Object.freeze(jsuser)//all object is lock so value can not be chnaged
jsuser.email ="sks@yahoo.com"

//javascript function
jsuser.greeting=function(){
    console.log("hello js user");
    
}

jsuser.greetingtwo=function(){
    console.log(`hello js user ${this.fullname}`);
    
}
console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
