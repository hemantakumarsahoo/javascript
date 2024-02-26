// const score =400;
// console.log(score);

// const balance=new Number(100);//it define it is number type
// console.log(balance);
// console.log(balance.toString().length);//length of the number string
// console.log(balance.toFixed(4));//shows the  0 after the number like100.0000

// const otherNumber=23.87944;
// console.log(otherNumber.toPrecision(4));//shows total number of digit like-23.87
// console.log(otherNumber.toPrecision(3));//3 digit showing
// console.log(otherNumber.toPrecision(2));//upper floar number

// const hundreds= 1000000
// console.log(hundreds.toLocaleString('en-IN'));


//-------------math --------------------

// console.log(Math)
// console.log(Math.abs(-4))//it return the absolute value it means  negative is become positive but positive number is  not change
// console.log(Math.round(4.5));//4.5 AND UPPER VALUE IT GIVE RESULT 5

// console.log(Math.ceil(4.9));//it means top value
// console.log(Math.floor(4.9));// it retuns the floar value 4
// console.log(Math.sqrt(40));
// console.log(Math.min(4,9,10,2,7));
// console.log(Math.max(4,9,10,2,7));
// we can  also doning many operation using mMath. function to perform mathmatical calculation


//random functon
console.log(Math.random());//it comes in between 0 and 1
console.log(Math.random()*10);// the random number multiply with 10
console.log(Math.random()*10+1);//
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)))
console.log(Math.floor(Math.random() * (max-min+1))+min)//value comes in between 10 to 20