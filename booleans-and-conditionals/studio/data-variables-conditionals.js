// Initialize Variables below
const date = ("Monday 2019-03-18");
const time = ("10:05:34 AM")
const astronautCount = 7;
const astronautStatus = ("ready")
const averageAstronautMassKg = 80.7;
const crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = crewMassKg +fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
let preparedForLiftOff = true;

console.log(totalMassKg)


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Too many people!!");
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    console.log("Not Ready!!");
    preparedForLiftOff = false;
}

/*
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    console.log("Too heavy!!");
    preparedForLiftOff = false;
}
*/

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -150 || fuelTempCelsius < -300) {
    console.log("Wrong Temp!");
    preparedForLiftOff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    console.log("No fuel!");
    preparedForLiftOff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    console.log("Weather sucks!");
    preparedForLiftOff = false;
}

// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff) {
    console.log("LAUNCH!!");
}