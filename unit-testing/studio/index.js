
let launchcode = {
    organization : "nonprofit",
    executiveDirector : "Jeff",
    percentageCoolEmployees : 100,
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput : function(num) {
        divBy2 = num % 2 === 0;
        divBy3 = num % 3 === 0;
        divBy5 = num % 5 === 0;
        if (divBy2 === false && divBy3 === false && divBy5 === false) {
            return "Rutabagas! That doesn't work.";
        } else if (divBy2 === true && divBy3 === true && divBy5 === true) {
            return "LaunchCode Rocks!";
        } else if (divBy2 === true && divBy3 === false && divBy5 === true) {
            return "Launch Rocks (CRASH!!!)";
        } else if (divBy2 === false && divBy3 === true && divBy5 === true) {
            return "Code Rocks!";
        } else if (divBy2 === true && divBy3 === true && divBy5 === false) {
            return "LaunchCode!";
        } else if (divBy2 == false && divBy3 === false && divBy5 === true) {
            return "Rocks!";
        } else if (divBy2 === false && divBy3 === true && divBy5 === false) {
            return "Code!";
        } else if(divBy2 === true && divBy3 === false && divBy5 === false) {
            return "Launch!";
        }
    }
};

module.exports = launchcode;


