// array

// const myArr =[0,2,1,"alex",4];
const myArr = [0,1,2,3,4,55]; // in java script arrays are resizeable
// console.log(myArr[0]);
// console.log(myArr);

const myArr2 = new Array(1,3,4,5,6);
// console.log(myArr2);

// array methods

// myArr.push(6,8,9); // push will add the new element at the end of the array list
// myArr.push(7);
// myArr.pop(); // pop will just remove the last element from the array list
// myArr.unshift(10,20);   // unshift will just add the new elements to the start of the array list 
// console.log(myArr.includes(6)); // the result will be boolean type
// console.log(myArr.indexOf(55)); // the result will be boolean type
// console.log(myArr.indexOf(19)); // the result will be -1 if the value doesnot exists in the array list
// const newArray = myArr.join();// it type will be string when you use the join keyword 
// console.log(myArr);
// console.log(newArray);
// console.log(typeof newArray); // string will be its type as you know its a array then also

// slice, splice
 console.log("A", myArr);
 
 const myn1 = myArr.slice(1,3); // (1,3)  starting index and ending index first will be included and middle ones except the last one
 console.log(myn1);
 console.log("B", myArr);

 const myn2 = myArr.splice(1,3);// (1,3) it will include the element at the index one and two and three also 
 console.log("C", myArr);// splice function just manipulates the original array and slice does not

 console.log(myn2);// when you will print the array you will get the elements from that range and these elements will not their when you print the default array list
 console.log("C", myArr);// splice function just manipulates the original array and slice does not


