// Login system

// To make a login system where a user can simply login using there credentials like username and password we must declare variables for input

const username = "sonuadhikari";
const password = 1234;

// These two are entered input by the users and these will be sent for verificstion to state wether they are valid or not

// Logic
if(username === "sonuadhikari" && password === 1234) {
    console.log("Welcome!",username,"Login is successful");
} else if ( username === "sonuadhikari" && password !== 1234 ) {
    console.log("Wrong password for username:", username)
} else if ( username !== "sonuadhikari" && password === 1234) {
    console.log("Invalid username");
} else {
    console.log("Inavlid credentials");
}