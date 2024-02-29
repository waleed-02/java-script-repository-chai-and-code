// const app= new Object(); // it is a single ton object 
const apps = {}; // it is a non single ton object

apps.id="key12";
apps.name="alex";
apps.isonline=false;

// console.log(apps);

const user = {
    email:"alex@gmail.com",
    fullname:{
        username:{
            userfirstname:"alex",
            userlastname:"potter",
        }
    }
};
// console.log(user.fullname.username.userfirstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"c",6:"d"};
const obj5={7:"c",8:"d"};
const obj6={9:"c",10:"f"};
// const obj3 = {obj1,obj2}// it will show problem of array
// const obj3 = Object.assign({},obj1,obj2,obj4,obj5,obj6);
const obj3 = { ...obj1,...obj2,...obj4,...obj5,...obj6 };

// console.log(obj3);

const users =
[
    {
        id:1,
        email:"alex@gmail.com",
        
    },
    {
        id:1,
        email:"alex@gmail.com",

    },
    {
        id:1,
        email:"alex@gmail.com",

    }
]

users[1].email
// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("isonline"));

// de-structure of objects
const course={
    coursename:"it is here"
    ,price:"400",
    courseInstructor :"alex",


};

// course.courseInstructor 

const {courseInstructor:instructor}= course;
// console.log(instructor);

// const navbar = ({company} ) => {

// };
// navbar(company="alexCo");
// this is a basic syntax of json API
// {
//     "name":"alex",
//    " coursename":"is here",
//     "price":"free"
// }