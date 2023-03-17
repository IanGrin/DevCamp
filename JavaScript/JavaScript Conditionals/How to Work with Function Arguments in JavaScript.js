function fullName(firstName, lastName, language) {
    language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
};

console.log(fullName('Ian', 'Merritt', 'Spanish'));

// function sample(arg1, arg2) {
//     console.log(arg1);
//     console.log(arg2);
// }