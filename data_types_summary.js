// primitive data type 
// 7 types are their // primitive data types are call by value 
// we get the copied values from the memory not the actuall path
// number
// string
// boolean
// undefined
// null 
// symbol // it is use to make unique value
// Bigint  // it is use for bigger digits
 
const  score = 122; // number type
const  scoreValue = 122.3; // number type
 
const isloggedin = true; // boolean type
const currentidnameis = "alex"; // string type
const currentTemperature = null; // object type
const newhighScore = undefined; // undefined type
let newhighScore1  ; // undefined type
const id = Symbol('123'); // symbol type
const anotherId = Symbol('123'); // symbol type
console.log(id === anotherId);// false
const bignumber = 45455656236546652222223n ; // undefined type
console.log(typeof infinite);
/* note */
/* java script is dynamically typed language */
// let num =122;
/* type script is statically typed language */
// let num1:Number =33;
/* note */

// non-primitive or reference data type
// 3 types are their // non-primitive data types are call by reference
// object
// array
// function
 
const heros=['thor','iron man','doctor strange']; // type object
console.log(typeof heros);// type object
let obj={
    name:'alex',
    age: ""+20, 
    id:"124"
} // object is written in curly braces or we can just make a variable and store them into them 
console.log(typeof obj); // object type
console.table(obj);
 
const myfunction = function add(a,b)
{
    return a+b;
};
console.log(myfunction(20,30));
console.log(typeof myfunction);// function object type
// all the reference data type returns object type and funtion returns object function