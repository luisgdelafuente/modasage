// JS MODASAGE v0.1

var dailyDosage = 50;           // Amoung of Moda taken each day
var numDays = 5;                // Moda´s half life in hours
var halfLife = 15;              // Number of days of analysis
var rate;                       // Moda in blood at any given date (local in func) 
var dayRate;                    // Normalization of half life 

// Half life normalization to 24h
dayRate = Math.pow(0.5,24/halfLife);   

// Function to calculate the daily rate at any given day
function calculateRate(dayRate,dayNumber) {
    var rate; 
    rate = dailyDosage*(1-Math.pow(dayRate,dayNumber))/(1-dayRate);
    return rate; 
}

// Loop to print the daily rate for any number of days 
for (dayNumber=1; dayNumber <= numDays; dayNumber++) {
    var rate;
    rate = calculateRate(dayRate,dayNumber); 
    console.log("Modafinil in blood day #",dayNumber, ": ",rate); 
} 

