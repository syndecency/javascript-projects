let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()); // does nothing
console.log(str.split('e')); // separates elements at 'e'.
console.log(str.split(' ')); // separates into elements at each space
console.log(str.split('')); // separates each character into an element

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());  // joins with a comma
console.log(arr.join('a'));  // joins with an 'a'
console.log(arr.join(' '));  // joins with a space btwn elements
console.log(arr.join(''));  // elements are combined

//3) Do split or join change the original string/array?
// No
console.log(str);
console.log(arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let newCargoHold = cargoHold.split(',').sort();
console.log(newCargoHold);

newCargoHold = newCargoHold.join();
console.log(newCargoHold);
