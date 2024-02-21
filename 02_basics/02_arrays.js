const myHeros = ["shaktiman","goku","hero","flyingJet"];
const marvel =["ironman","thor","doctorstrange","hulk"];

// marvel.push(myHeros);
// console.log(marvel);
// console.log(marvel[4][1]);

// console.log(typeof marvel);// type object
// const heros =  marvel.concat(myHeros); // it combines the array and returns a new array in return we should use a new variable to store the value for the new concat array
// console.log(heros);

const allheros = [...marvel,...myHeros]; // it will spread the array example take a glass and drop it on the ground the pieces will spread
// we can add more then one values of array in this not like concat i has limitation to only two arrays 

// console.log(allheros);
const anotherarr =[1,3,5,6,[4,45,63],5,[32,4,2,5,[4,5,6]]];
const anotheronearr = anotherarr.flat();// it will return a single combining them all together and we give the depth value to be solved 
const anotheronearr1 = anotherarr.flat(1);// we can give the depth value to be solved 
const anotheronearr2= anotherarr.flat(Infinity);// in case we dont know the depth of the array we can simply write infinity and it will sort the array on its own
// console.log(anotheronearr);
// console.log(anotheronearr1);
// console.log(anotheronearr2);

console.log( Array.isArray("alex"));
console.log( Array.from("alex"));// it will convert the value into and array
console.log( Array.from( {name:"alex",id:32}));// it will give an empty array[]

let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));// it will convert all the elements values and return and array