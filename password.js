const readlineSync = require('readline-sync');

let password;

function hasLength(password) {
    return password.length >= 8;
}
function hasUppercase(password) {
    return /[A-Z]/.test(password);
}
function hasNumbers(password) {
    return /\d/.test(password);
}

do {
    password = readlineSync.question("Enter a password: ");
    if (hasLength(password) === false) {
        console.log("The password must be at least 8 characters long.")
    }
    if (hasUppercase(password) === false) {
        console.log("The password must contain at least one uppercase letter.")
    }
    if (hasNumbers(password) === false) {
        console.log("The password must contain at least one number.")
    }
} while (hasLength(password) === false || hasUppercase(password) === false || hasNumbers(password) === false);
console.log("Password accepted.");