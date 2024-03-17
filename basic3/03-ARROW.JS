const user={
    username:"hemanta",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}
// user.welcomeMessage()
// user.username="kumar";
// user.welcomeMessage()
console.log(this);//it refers a empty object but in the browser it will shows window

// function chai(){
//     console.log(this);
// }
// chai()

// const chai=function (){
//     let username="hks"
//     console.log(this.username);
// }
// chai()

const chai=()=>{
    let username="hks"
    console.log(this.username);
}
chai()

//arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2//explicitly retun
// }
// console.log(addTwo(3,4))

//const addTwo=(num1,num2)=> num1+num2
//const addTwo=(num1,num2)=> (num1+num2)//implicity return
const addTwo=(num1,num2)=> ({username:"hks"})//if i return object i need the parenthesis 
    
console.log(addTwo(3,4))
