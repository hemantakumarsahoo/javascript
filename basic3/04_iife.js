//Immediately Invoked Function Expression(IIFE)
(function chai(){
    console.log(`DB CONNECTION `);
})();//syntax for iife

(function aurcode(){
    console.log(`DB CONNECTED TWO`);
})();//  need the semicolon
//arrow function 
( (name) => {
    console.log(`DB CONNCTED ${name}`);

})("hks");
