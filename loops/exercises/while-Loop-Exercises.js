const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuel = "";
let numberOfAstronauts = "";
let peakAltitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuel = input.question("What is the starting fuel level?: ");
startingFuel = Number(startingFuel);
// console.log(startingFuel);

while (startingFuel <= 5000 || startingFuel > 30000 || isNaN(startingFuel)) {
  startingFuel = input.question("Invalid input. Please try again: ");
  startingFuel = Number(startingFuel);
}
// console.log(startingFuel);



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numberOfAstronauts = input.question("Number of astronauts: ");
numberOfAstronauts = Number(numberOfAstronauts);
// console.log(numberOfAstronauts);

while (numberOfAstronauts > 7) {
  numberOfAstronauts = input.question("Maximum number of atronauts in 7. Please adjust and re-enter a valid number: ")
  numberOfAstronauts =Number(numberOfAstronauts);
}
 //  console.log(numberOfAstronauts);
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuel - 100 * numberOfAstronauts >= 0) {
  peakAltitude += 50;
  startingFuel -=100 * numberOfAstronauts;
 }

 //console.log(`Peak altitude: ${peakAltitude} km.`);
 //console.log(`Remaining fuel: ${startingFuel}`);
  

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”


If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${peakAltitude} km.`);

if (peakAltitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.")
}
