const dinnerMenu = {
    hamburger: {
        name: "Bacon Double Cheeseburger",
        cost: 7.99
    },

    curry: {
        name: "Green Curry",
        cost: 8.99
    },

    friedRice: {
        name: "Fried Rice",
        cost: 5.99
    }

};

const sideMenu = {
    fries: {
        name: "Garlic French Fries",
        cost: 5.99
    },

    salad: {
        name: "Thai Salad",
        cost: 3.99
    },

    milkshake: {
        name: "Hot Fudge Shake",
        cost: 3.99
    }
}

const welcome = () => {
    alert("Take a look at our menu! What can I get started for you?")
    alert(`
    Menu
    Entree's  ${dinnerMenu.hamburger.name}, Cost: $${dinnerMenu.hamburger.cost}.
                    ${dinnerMenu.curry.name}, Cost: $${dinnerMenu.curry.cost}.
                    ${dinnerMenu.friedRice.name}, Cost: $${dinnerMenu.friedRice.cost}.
    Side's      ${sideMenu.fries.name}, Cost $${sideMenu.fries.cost}.
                    ${sideMenu.salad.name}, Cost $${sideMenu.salad.cost}.
                    ${sideMenu.milkshake.name}, Cost $${sideMenu.milkshake.cost}.
    `);
};

const 

welcome();