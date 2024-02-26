// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

// //let myCreatedDate=new Date(2023,0,23)
// // let myCreatedDate=new Date(2023,0,23,5,3)
// //console.log(myCreatedDate.toLocaleString())
// let myCreatedDate=new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString())
// //time stamp
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//time in mili second


//time in second
console.log(Math.floor(Date.now()/1000))//

///date mathod
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate)