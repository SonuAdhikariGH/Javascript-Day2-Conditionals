// Traffic light system

// Declaring variable
let light = 'yellow';

// Declaring the veriable with let just to ensure that we dont face any issue while redeclaring or assigning it with a different value in future while making the logic

if(light === 'red' || light === 'Red' || light === 'RED') {
    console.log("Stop");
} else if (light === 'yellow' || light === 'Yellow' || light === 'YELLOW') {
    console.log("Get Ready");
} else if(light === 'green' || light === 'Green' || light === 'GREEN') {
    console.log("Go");
} else {
    console.log("Invalid color");
}
    
//  'red' || 'Red' || 'RED' this line of code ensures that the code that comes will be checked with it caps as if it's written capitally or enitirely small or just in the usual way