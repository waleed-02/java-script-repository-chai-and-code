// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024,1,20); // months starts from 0 in java script!!!!!!!!!!!
// let myCreatedDate = new Date(2024,1,20,8,47);
// let myCreatedDate = new Date("2024-02-20");// YY-MM-DD is not followed by most so we use MM-DD-YY
let myCreatedDate = new Date("02-20-2024");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
 
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDay());

// `${newDate.getDate()}  and the time `;


newDate.toLocaleString('default',{weekday: "short",
timeZone: 'timeZone' });










































































