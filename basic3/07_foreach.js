const coding =["js","ruby","java","python","cpp"]
// coding.forEach(function (val) {
//     console.log(val)
    
// })
//using arrow function
// coding.forEach((item) => {
//     console.log(item);
// })


//print me
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)

// })


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:".js"
    },

    {
        languageName:"python",
        languageFileName:".py"
    },
    {
        languageName:"java",
        languageFileName:".java"
    }

]
myCoding.forEach((element) => {
    //console.log(element.languageName)
    //console.log(element.languageFileName)
    
});

//filter map reduce  video-30
//  const value=coding.forEach((item)=>{//for each loop not return any value
//     console.log(item);
//     return item

// })
// console.log(value);

// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.filter((num)=>num>4)
// console.log(newNum)
const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.filter((num)=>{
//     return num>4
// }//if i open the scope  use return key word
// )
// console.log(newNum)

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }

// })
// console.log(newNums);


//map
// const MyNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=MyNumbers.map((num)=>num+10)
// console.log(newNums)
//if i need to add scope then return keyword we need to add
const MyNumbers=[1,2,3,4,5,6,7,8,9,10]
//const newNums=MyNumbers.map((num)=> { return num+10})

const newNums=MyNumbers
                        .map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)
console.log(newNums);

//reduce method