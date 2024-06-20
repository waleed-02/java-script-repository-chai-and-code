const user = {
    username : "alex",
    price : 999,
    welcomeMessage(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

 

};

// user.welcomeMessage();
// user.username="kakashi";
// user.welcomeMessage();
// console.log(this); 
//  function chai()
//  {
//     let username ="alex";
//     console.log(this.username);
//  }

// chai();

// const chai = function()
// {
//     let username="alex"
//     console.log(this.username);
// }
const chai = ()=> // arrow function
{
    let username="alex"
    console.log(this);
}

// chai();

// arrow function
// const add=(num1,num2)=>{
// return num1+num2;
// }
// implicit return 
// const add = (num1,num2)=>  num1+num2;

const add = (num1,num2)=>  ({username:"alex"});
console.log( add(12,8) );

const myarr =[2,4,5,67,6];
// myarr.forEach(function(){});
// myarr.forEach= ()=>{};