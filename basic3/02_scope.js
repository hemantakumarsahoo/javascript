
let a=3000;
if(true){
    let a=10;
    const b=20;
    var c =30;
    console.log("inner",a)
    
}

console.log("outer",a);
//console.log(b)
console.log(c)


function one(){
    const username="hemanta"
    function two(){
        const website="youtube"
        console.log(username);
    }

    //console.log(website);

    two()
}
one()