var userObj = {
    email: 'sample@example.com',
    fullName: 'Jane Merritt'
}

function dashboardGreeting() {
    var userObj = {
        email: 'sample@example.com',
        fullName: 'Ian Merritt'
    }
    console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();
console.log(userObj.fullName);
