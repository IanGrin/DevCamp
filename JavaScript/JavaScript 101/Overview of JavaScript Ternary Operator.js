function adminControls(user) {
    // if (user) {
    //     if (user.admin) {
    //         console.log('showing admin controls...');
    //     } else {
    //         console.log('need to be an admin');
    //     }
    // } else {
    //     console.log('you need to be logged in');
    // }

    let response = user ? (user.admin ? "showing admin controls..." : "You need to be an admin") : "You need to be logged in";
    console.log(response);
}

let userOne = {
    name: 'Kristine',
    admin: true
}

adminControls(userOne);

let userTwo = {
    name: 'Tiffany',
    admin: false
}

adminControls(userTwo);

let userThree = null
adminControls(userThree);


// function ageVerification(age) {
//     // if (age > 25) {
//     //     console.log('can rent a car');
//     // } else {
//     //     console.log('is not old enough yet');
//     // }

//     let answer = age > 25 ? 'can rent a car' : "can't rent a car";
//     console.log(answer);

//     // age > 25 ? console.log('can rent a car') : console.log("can't rent a car");
// }

// ageVerification(55)
