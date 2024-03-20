//for of loop-iterate for array


const arr=[1,2,3,4]
for (const  num of arr) {
    //console.log(num)
     
}
const greeting="hello world";
for (const i of greeting) {
   // console.log(`each character is ${i}`)
    
}
//map - is a object which hold the key value pair as like as object but it maintain the order and also no duplicate value

const map=new Map()
map.set('IN','INDIA')
map.set('USA','united state of america')
map.set('fr','france')
map.set('IN','INDIA')

// console.log(map);

for (const i of map) {
   // console.log(i);//it will print the map in the form of array
    
}
//if i need indivisual value
for (const [key,value] of map) {
   // console.log(key, ':-',value)
}

//if i have object  for of loop use
// const myObject={//object is not iterable
//     'game':'pubg',
//     'game2':'spider man',
//     game3:'freefire'

// }
// for (const [key,value] of myObject) {
//     console.log(key,value);

    
//}
//for in loop  for object 
const myObject2={
    jss:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"

}
for (const key in myObject2) {
    //console.log(key) // this line is only print the all key present in the object
     //console.log(myObject2[key]);// ithis line print the value only
    //console.log(`${key} shortcut is for ${myObject2[key]}`);
}

//for in for array
const programming=["javascript","C++","ruby","swift by apple"]
for (const key in programming) {
    //console.log(key)// in for in loop we use in array it will retun only number because arrry keys are number
    //console.log(programming[key])
        
}
//for in loop for map
const map1=new Map()
map1.set('IN','INDIA')
map1.set('USA','united state of america')
map1.set('fr','france')
map1.set('IN','INDIA')
for (const key in map1) {
    console.log(key)//it is not iterable so no output is generate and also no error
    
}


