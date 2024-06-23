// immediate inveked function expressions (IIFE)


(function chai ()
{
    console.log(`db connected`);
})(); // IIfE syntax  
/*
(function fun_name(){
    console.log("iife function");
})();
*/ 
// chai();
(function add(a,b){
    //named iife with parameters
    console.log("the sum is: "+(a+b));

})(20,20);
// to overcome the problem cause by the global scope pollution we use iife immediately invoked function expression
// to invoke the function immediately we use iife function.

// we can also use arrow functions too
(()=>{
//unnamed iife arrow function
console.log("i am done");

})();
((name)=>{
    //simple iife with parameters
console.log(`i am done ${name} `);

})("alex");