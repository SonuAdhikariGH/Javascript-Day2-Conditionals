// Grade Calculator

const marks = 79;
// Getting the input value with the variable
// Used const so the marks can not be redecalred (Because it has now become a constant)

// Logic
if( marks >= 90) {
    console.log("Grade A");
} else if( marks >= 75 && marks <= 89) {
    console.log("Grade B");
} else if( marks >= 50 && marks <= 74) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}
// The && checks for both the conditions to be true