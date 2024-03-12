
function sayMyName(){
console.log("h");
console.log("e");
console.log("m");
console.log("a");
console.log("n");
console.log("t");
console.log("a");
}
//sayMyName()
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);

// }
function addTwoNumber(number1,number2){
    return number1+number2

}
const result=addTwoNumber(2,3)
console.log("result",result);


// function loginUserMessage(username){
//     return `${} just logged in`
// }
// loginUserMessage("hemanta")//when we run this block of code it cannot print anything because we cant console log we just return the value not print if we want to print we store the value in a vaRIABLE
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// const result1=loginUserMessage("hemanta");
// console.log(result1)
function loginUserMessage(username ="sam"){//sam is default value
    if(username === undefined){
        console.log("plese enter name")
        return 

    }
    return `${username} just logged in`
}
const result1=loginUserMessage();
console.log(result1)

// function calculateCartPrice(...num1){//rest operator
//     return num1
// }

// console.log(calculateCartPrice(200,400,600))//it out put the value as in the arraay
function calculateCartPrice(va1,val2,...num1){//rest operator
    return num1
}

console.log(calculateCartPrice(200,400,600,2000))//it out put t600 and 2000 val1 and val2 is 200 and 400

const user={
    username:"hemanta",
    price:199
}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`)

}
//handelObject(user)
handelObject({

    username:"sam",
    age:399
})
const myNewArray=[200,400,100,600]

function returnSecondValue(getarray){
    return getarray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,500,2000]))













