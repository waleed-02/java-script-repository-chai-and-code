let a =300;

// {this is called as scopes}  scope of that function
if (true)
    {
        let a= 10;
        const  b= 20;
        var c = 30;
// console.log("inner: "+a);

    }
// {} things written inside a block have block scope 
// what ever is written outside has a global scope


// console.log(a);
// console.log(b);
// console.log(c);
// DOM ---> document object model means how to manipulate an html page using javascript

// Nested scope
function one()
{
    const username = "alex";
    function two()
    {
        const website = "youtube" ;
        // console.log(username);
    }
    // console.log(website); // it shows error as it does not have scope outside the function name two();

    two(); 
}
one();
if (true)
    {
        const username ="alex";
        if(username==="alex")
            {
                const website= " youtube";
                // console.log(username+website);
            }
            // console.log(website); // show error its does not have scope outside the block
            // console.log(username);// it will also show if called outside the block 

    }
    // console.log(username);// it show error scope error

    // *********************** intresting **********************
    
    
    addone(5); // it will give the result 
    function addone(value)
    {
        return value+1;

    }
    addone(5);// it will only return not print 
    // console.log(addone(5));



    // addtwo(5);// it will show error as it cannot be accessed before initialization
    const addtwo= function(num) // it is a function but can also be called as an expression
    {
        return num + 2;
    }

    addtwo(5);

    // if a function declared as a variable we cannot access it before initialization 
    // a function declared normally can be accessed before initialization 
    // it is a concept of hosting 