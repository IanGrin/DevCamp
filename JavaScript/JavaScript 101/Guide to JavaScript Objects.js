let user = { 
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale',
    grades: {
        math: 90,
        science: 80,
        languageArts: 100
    }
}
user.grades.coding = 99;
console.log(user.grades);