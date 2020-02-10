var myName = 'William';

function sayName() {
    console.log(myName);
}

sayName();  // 'William'


var myName = 'William';

function sayName() {
var secret = 'watchandcode';
    console.log(myName);
}

sayName();  // 'William'
console.log(secret);

/* VM67354:9 Uncaught ReferenceError: secret is not defined
    at <anonymous>:9:13 */

// if you're inside of function, you can look out and see data, but the opposite isn't true. If you're outside, you can't look in .