const currentid= 20010;
var currentemail = "alex02@gmail.com"
let currentpassword ='1234';
currentcity = "mumbai"; 
// it is not a good practice
// we must use let keyword or const to declare a variable
currentcity="pune";

let currentstate;
// currentid=20011;
/*
 please do not use var keyword
 beacause of its block scope and funtional scope
*/
currentemail="alex00@gmail.com";
currentpassword='0202';
console.log(currentid);
console.table([currentid,currentemail,currentpassword,currentcity,currentstate]);


