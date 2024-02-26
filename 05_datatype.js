//stack primitive data type  data  is copy
// let name="hemanta"
// let age=22
// console.log(`hello my name is ${name} and my age is ${age}`);
const gameName=new String('hemanta')
console.log(gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);//all string method are shown in the broswer


console.log(gameName.length)//length of the string
console.log(gameName.toUpperCase());//all letter is uppercase
console.log(gameName.charAt(3));//index 3 character is present
console.log(gameName.indexOf('t'));//index of t this function give


// const newString = gameName.substring(0,4);
// console.log(newString);//in the new string the 0 index to no3 index are print not the 4th number index is printing

const anotherString=gameName.slice(-8,3);//in this slice function is same is substring but in this we also add negative string
console.log(anotherString);
const newSStringOne="  hemanta  ";
console.log(newSStringOne);
console.log(newSStringOne.trim());//IT REMOVE THE BLANK SPACE INTO THE ENTAIR STRING

const url="https//hemanta.com/hks%20sahoo"
console.log(url.replace('%20','_'));
console.log(url.includes('hemanta'));
console.log(url.includes('asisah'));
console.log(gameName.split('_'));
console.log(gameName.blink());

console.log(gameName.charAt(4));