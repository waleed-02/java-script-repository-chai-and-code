

function saymyname(){
    console.log("a");
    console.log("l");
    console.log("e");
    console.log("x");
}
// saymyname;// it is the reference to the function

// saymyname(); // this the execution of the function

function additon(num1, num2)
{
    // console.log(num1+num2);
    // let result =num1+num2;
    return num1+num2;

}
// console.log(additon(20,10));
const result = additon(20,20);
// console.log("result is: ",result);

function loginusermessage(username)
{
    if(username === undefined)
    {
console.log("please enter a username");
return ;
    }
    else{
        return `${username} just logged in`;

    }
    // the function will only return the value and will not print it 
    //  we have to use console.log to print the value
}
// loginusermessage("alex");// it will not going to show any value cause its just a reference not an execution  
// console.log(loginusermessage());
// console.log(loginusermessage("alex"));
