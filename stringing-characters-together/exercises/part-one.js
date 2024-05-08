let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = (String(num))
console.log(num.length);

    //or...
    console.log(num.toString().length)

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 123.45
if(String(decimal).includes('.')) {
    console.log(String(decimal).length - 1)
}

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let decTwo = 123456
if(String(decTwo).includes('.')) {
    console.log(String(decTwo).length - 1);
} else {
    console.log(String(decTwo).length)
}