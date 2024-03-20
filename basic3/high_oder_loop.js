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
    console.log(i);//it will print the map in the form of array
    
}
//if i need indivisual value
for (const [key,value] of map) {
   // console.log(key, ':-',value)
}

//if i have object  for of loop use
const myObject={//object is not iterable
    'game':'pubg',
    'game2':'spider man',
    game3:'freefire'

}
for (const [key,value] of myObject) {
    console.log(key,value);

    
}
//for in loop  for object 


