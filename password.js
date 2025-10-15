const readlineSync = require('readline-sync');

let password;
do {
    password = readlineSync.question("Enter your password: ");
    if (password!=="Jambalaya2025") {
        console.log("Try again.");
    }
} while (password!=="Jambalaya2025");
console.log("Access granted.");