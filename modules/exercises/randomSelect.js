function randomFromArray(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

//TODO: Export the randomFromArray function.

array = ['3', '27', 'practice', 'makes', 'mastery'];

console.log(randomFromArray(array));

module.exports = randomFromArray;
