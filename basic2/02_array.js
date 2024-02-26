const marval_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"]
marval_heros.push(dc_heros)// in the push method it push one array into another array

// console.log(marval_heros)
// console.log(marval_heros[3])

const heros=marval_heros.concat(dc_heros)//concat function  merged the array and store the value in a new array variable
console.log(heros)

const all_new_heros=[...marval_heros,...dc_heros]
console.log(all_new_heros)// it same as concat but now use is this many it spread the array


 const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_another_array=another_array.flat(Infinity)//it flats the all array in to a single array and it needs the  value like 2,3 ,4 or infinity
 console.log(real_another_array)

 console.log(Array.isArray("hemanta"))//it question this is it array or not//false
 //convertion of string to array
 console.log(Array.from("hemanta"))
 console.log(Array.from({name:"hemanta"}));//it gives the output empty arry because of cant convert it we need to mention keys become array or value become array



let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
