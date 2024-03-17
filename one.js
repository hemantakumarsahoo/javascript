// const temperature=41
// if(temperature<50){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// const balance=1000
// if(balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 75
// else if(balance<900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }
// const userLoggedIn=true
// const debitCard=true
// const loggedFromGoogle=false
// const LoggedFromEmail=true
// if(userLoggedIn && debitCard && 2==3 ){
//     console.log("allow to buy cource")
// }
// if(loggedFromGoogle || LoggedFromEmail){
//     console.log("user log in")
// }

//switch statement
const month=3//we also match with string also
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:// select the section thenshift altkey+downarrow for duplicate the value
        console.log("march");
        break;
    case 4:
        console.log("march");
        break;
    case 5:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//truthy value and false value
const userEmail=""
if(userEmail){
    console.log("got user email")
}else{
    console.log("dont have user email")
}

//falsy value----------
//false,0,,-0,Bigint 0n,"",null,undefined,NaN

// Truthy Value
//  "0",'false'," ",[]empty Array,{}emptyobject,function(){}it is also truth value

//36 minutes on wards
//object or arry check empty or not
// if (userEmail.length===0){
//     console.log("array is empty")
// }
const emptyObj={}
    if(Object.keys(emptyObj).length===0){//in this the object is converted to arry and then .length method we check it is empty or not
        console.log('object is empty')
    }

   //Nullish Coalescing Operator(??): null undefined
   let val1;
   //val1=5??10
   //val1=null??10
   //val1=undefined?? 15
   val1=null??10??20

   console.log(val1) 
   //Ternary operator
   //condition?true:false
   const iceTea=100
   iceTea<=80? console.log("lessthan80"):console.log("morethan 80")