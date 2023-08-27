// Question No.1
//Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value
// Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
// */

// const isEmpty = require("lodash/isEmpty");

// const obj={
//   name: 'Ishmal'
// }

// console.log( isEmpty(obj) );
// if(!Object.keys(obj).length){
//   console.log("object is empty");
// }
// else console.log("object is not empty") 

// Answer:
const user={
    name:'johan',
    surmane: 'smith',
}
console.log(user)
user.name='pete'
console.log(user)
delete(user.surmane)
console.log(user)


//Question No.2
//Check if an object is empty or not

//Answer: 
const obj={}
if(!Object.keys(obj).length){
    console.log("object is empty")
}
else console.log('object is not empty')


//Question No.3 
// We have an object storing salaries
// of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum
// all salaries and store in the
// variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

//Answer:
const salary={
    a: 150,
    b: 160,
    c: 130,
    sumvalue: function add (){
        return this.a+this.b+this.c
    }
}
const sum= salary.sumvalue()
    console.log(sum)




//Question No.4 
// Create a function multiplyNumeric(obj) that multiplies
// all numeric property values of obj by 2.
// For instance:
// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// Please note that multiplyNumeric
// does not need to return
// anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.

//Answer:
function multiplyNumeric(menu) {


    const menuKeys = Object.keys(menu);


    console.log(menuKeys)


    menuKeys.forEach((key, index, array) => {


        console.log(key)
        console.log(index)
        console.log(array)


    })


    console.log('zain')
   
}


let menu ={
    width: 200,
    height: 300,
    title: "May menu",
    }


multiplyNumeric(menu)

/* Question 5

Create a parameterised
function inside an object
*/
//Answer:
// Define an object with a parameterized function
const myObject = {
    greeting: function(name) {
      return `Hello, ${name}!`;
    }
  };
  
  // Call the parameterized function
  const message = myObject.greeting("Alice");
  console.log(message); 
  