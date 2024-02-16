const name = 'alex';
const repocount = 2 ;
// console.log( name +  repocount + " Value ");
// using backtick is a good practice to concatinate strings and add more strings in it 
// string interpolation comes in this situation 
// we make placeholders and inject variables using ${} this syntax and its redable also
// console.log(`hello my name is ${name} and my repo count is ${repocount} Value`);
// lets see another way to declare a string
const gamername = new String("alex-gamer-fortnite-gta6");
// console.log(gamername);
// console.log(typeof(gamername));
// console.log(gamername[0]);
// console.log(gamername.__proto__);
// console.log(gamername.length);
// console.log(gamername.toUpperCase());
// console.log(gamername.charAt(2));
// console.log(gamername.indexOf('g'));
const newString = gamername.substring(0, 3);
console.log(newString+"e");
const anotherString = gamername.slice(-8,4);
console.log(anotherString);
const newString1 = "      alex     ";
console.log(newString1);
console.log(newString1.trimStart());
console.log(newString1.trim());
console.log(newString1.trimEnd());

const url ="https://www.tubeyoube.com/gameing%10newVideo";
console.log(url.replace('%10','-'));
console.log(url.includes("gameing"));
console.log(url.includes("%10"));
console.log(url.includes("gamer"));
console.log(gamername.split("-"));
