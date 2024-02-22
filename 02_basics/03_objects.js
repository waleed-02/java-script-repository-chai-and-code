// singleton

// object literals
// Object.create

const mysym = Symbol("key1");

const jsuser ={
    name:"alex",
    "full name":"alex uchiha",
    age:19,
    [mysym]:"mykey1",
    location :"mumbai",
    email:"alex@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"]
}
// console.log(jsuser.age); 
// console.log(jsuser["age"]); 
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

// jsuser.email="alex32@gmail.com";
// Object.freeze(jsuser);
// jsuser.email="alex43@gmail.com";
// console.log(jsuser);

jsuser.greeting= function()
{
    console.log(`hello js user , ${this.name}`);
}
console.log(jsuser.greeting());