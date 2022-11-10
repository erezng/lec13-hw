"use strict";
function greet(person) {
    return "Hello" + person.name;
}
const user = { name: 'Erez', age: 28 };
console.log(greet(user));
function isTruthy(val) {
    if (val) {
        console.log(val + " is Truthy");
    }
    else {
        console.log(val + " is falsy");
    }
}
//targil 3
isTruthy(true); //true
isTruthy({}); //true
isTruthy([]); //true
isTruthy(42); //true
isTruthy("0"); //true
isTruthy("false"); //true
isTruthy(new Date()); //true
isTruthy(-42); //true
isTruthy(12n); //true
isTruthy(3.14); //true
isTruthy(-3.14); //true
isTruthy(Infinity); //true
isTruthy(-Infinity); //true
isTruthy(0); //false
isTruthy(""); //false
isTruthy(false); //false
isTruthy(NaN); //false
isTruthy(null); //false
isTruthy(undefined); //false
