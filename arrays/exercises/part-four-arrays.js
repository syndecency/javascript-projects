let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
/*
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.
console.log(holdCabinet1);
console.log(holdCabinet2);
//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
// concat only prints the two together. It does not change the array. 
console.log(holdCabinet2.concat(holdCabinet1));
console.log(holdCabinet1);
console.log(holdCabinet2);
*/

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
// No, it does not alter the original arrays.
holdCabinet1.slice(2,4);
console.log(holdCabinet1);
console.log(holdCabinet1.slice(2,4));
let newHoldCabinet1 = holdCabinet1.slice(2, 4);
console.log(newHoldCabinet1);
console.log(holdCabinet1);

console.log(holdCabinet2.slice(0,2));


//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
// Yes, they do change the array. The first reverses order and sort separated by type and then alphabetically. 
holdCabinet1.reverse();
console.log(holdCabinet1);

console.log(holdCabinet2.sort());
console.log(holdCabinet2);