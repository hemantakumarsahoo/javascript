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
    console.log(element.languageName)
    //console.log(element.languageFileName)
    
});