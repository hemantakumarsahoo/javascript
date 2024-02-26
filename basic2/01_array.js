const myarr=[0,1,2,3,4,5]
const myarr2=new Array(1,2,3,4)
//console.log([1])

//array method
// myarr.push(6)
// myarr.push(7)
// myarr.pop()//remove the last value
// myarr.unshift(9)//insert the arry in the first index
// myarr.shift()//first index remove
// console.log(myarr.includes(9))
// console.log(myarr.includes(3))
// console.log(myarr.indexOf(9))
// console.log(myarr.indexOf(3))

//join in array
const newarr=myarr.join()
// console.log(newarr);
// console.log(typeof(newarr));

// console.log(myarr)

//slice ,splice in array imp for interview
console.log("A", myarr)
const myn1=myarr.slice(1,3)//index 1 to 2 are include not the last index include means 3 index is not include in the slicing

console.log(myn1);
console.log("B", myarr)
const myn2=myarr.splice(1,3)//it prints the index 1 to 3 range is include and also change the original arry   will change the splice portion is remove and become a new array and also the main array is changed

console.log(myn2);
console.log("c", myarr)

