// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2<=1);
// console.log(2>=1);
// console.log(2!=1);

// console.log("2" > 2); // false
// console.log("2" > 1); // true
// console.log("02" > "2"); // false
// console.log("00" > "2"); // false

/* ************ we should avoid this type of conversions always cause the output is always unpredictable its a problem cause due to inconsistancy in the language it self ************* */
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null <= 0); //true
// console.log(null >= 0); // true
// console.log(null == 0); // false
// console.log(0 > null); // false
// console.log(0 < null); // false
// console.log(0 >= null); //true
// console.log(0 <= null); // true
// console.log(0 == null); // false
// console.log(null > undefined); //false
// console.log(0 > undefined); //false
// console.log(undefined > 0); //false
// console.log(undefined>null); // false
// console.log(undefined<null);// false
// console.log(undefined==null); // true
// console.log(undefined<=null); // false
// console.log(undefined>=null); // fasle
/* ************ we should avoid this type of conversions always cause the output is always unpredictable its a problem cause due to inconsistancy in the language it self ************* */

// === strict check
console.log("2" === 2);// false
console.log("2" === "2");// true