//Debugging with console.
console.log("Script loaded.");


// Dont change
const planetName = "Earth";   

//Value can vary
let planetType = "Planet";    

//old way of declaring variables
var discoveryYear = "4.6 to 4.5 Billion Years Ago"; 



/**Developed a function named populateHeader 
 *It targets the celestial-name element
 *set it to text content
 */
function populateHeader(){
    document.getElementById("celestial-name").textContent = planetName 
}

populateHeader()


/**Event listener
 * Appear space-fact element when clicked
 */

document.getElementById("reveal-fact")
.addEventListener("click", () => {

    document.getElementById("space-fact")
        .style.display = "block";
        console.log("Facts are shown");

});

//DOM manipulation
let newParagraph = document.createElement("p");
newParagraph.textContent = "Earth is the planet with stable liquid water and life .";
document.getElementById("celestial-info").appendChild(newParagraph)


//Arrow functions being used to convert minutes to hours
const minutesToHours = (minutes) => minutes / 60

document.getElementById("convert-btn")
.addEventListener("click", () => {

    let minutes = document.getElementById("minutes").value;

    document.getElementById("Converted").textContent =
        minutesToHours(minutes);
});


console.log(minutesToHours(60))

//Error Handling with Try-Catch-Finally
try {
    let result = riskyOperation();
} catch (error) {
    console.error("Error found");
} finally {
    console.log("Done");
}


//Looping Through Data


let earthKey = [
    "An unusually large moon",
    "It's not perfectly round",
    "About 70% of Earth is covered with water"
];

for (let key of earthKey) {
    console.log(key);
}