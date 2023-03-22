const entrees = {
    pst: {
        name: " Chicken Pasta",
        cost: 18.99
    },

    stk: {
        name: " 78 oz. Texas Size Steak",
        cost: 25.99
    },

    cb: {
        name: " Double Cheeseburger",
        cost: 12.99
    }
}

const sides = {
    fries: {
        name: "Chilli-Cheese Fries",
        cost: 7.99
    },

    salad: {
        name: "Salad",
        cost: 13.99
    },

    chips: {
        name: "Chips",
        cost: 9.99
    }
}

const welcome = () => {
    alert(`Would you like to take a look at our menu!`)
    alert(` Menu 
            Entrees $${entrees.pst.cost}:${entrees.pst.name}
                    $${entrees.stk.cost}:${entrees.stk.name}
                    $${entrees.cb.cost}: ${entrees.cb.name}
            Sides   $${sides.fries.cost}: ${sides.fries.name}
                    $${sides.salad.cost}: ${sides.salad.name}
                    $${sides.chips.cost}: ${sides.chips.name}
    `);
}

let entree;
let side1;
let side2;
let total;
let entreePrice;
let side1Price;
let side2Price;


const order = () => {
    orderEntree();
    orderSides();
    confirmOrder();
}

const orderEntree = () => {
    entree = prompt(`Entree Choice?
    (Pasta, Steak, or Burger)
  
      $${entrees.pst.cost}:${entrees.pst.name}
      $${entrees.stk.cost}:${entrees.stk.name}
      $${entrees.cb.cost}:${entrees.cb.name}
    `).toUpperCase();
    if (entree == "PASTA") {
        let confirmEntree = prompt(`The${entrees.pst.name} will be $${entrees.pst.cost}. Would you like the Chicken Entree?`).toString().toUpperCase();
        if (confirmEntree == "YES") { alert(`Great choice!`); }
        else { orderEntree(); }
    }
    else if (entree == "STEAK") {
        let confirmEntree = prompt(`The${entrees.stk.name} will be $${entrees.stk.cost}. Would you like the Steak Entree?`).toString().toUpperCase();
        if (confirmEntree == "YES") { alert(`Great choice!`); }
        else { orderEntree(); }
    }
    else if (entree == "BURGER") {
        let confirmEntree = prompt(`The${entrees.cb.name} will be $${entrees.cb.cost}. Would you like the Burger Entree?`).toString().toUpperCase();
        if (confirmEntree == "YES") { alert(`Great choice!`); }
        else { orderEntree(); }
    }
    else {
        alert(`Sorry, What Did You Say.`)
        orderEntree();
    }
}


const orderSides = () => {
    orderSide1();
    orderSide2();
}

const orderSide1 = () => {
    side1 = prompt(`What would you like for your First Side?
    (Fries, Salad, or Chips)
  
      $${sides.fries.cost}:${sides.fries.name}
      $${sides.salad.cost}:${sides.salad.name}
      $${sides.chips.cost}:${sides.chips.name}
    `).toUpperCase();
    if (side1 == "FRIES") {
        let confirmSide1 = prompt(`The${sides.fries.name} will be $${sides.fries.cost}. Is that what you want?`).toString().toUpperCase();
        if (confirmSide1 == "YES") { alert(`Great choice!`); }
        else { orderSide1(); }
    }
    else if (side1 == "SALAD") {
        let confirmSide1 = prompt(`The${sides.salad.name} will be $${sides.salad.cost}. Is that what you want?`).toString().toUpperCase();
        if (confirmSide1 == "YES") { alert(`Great choice!`); }
        else { orderSide1(); }
    }
    else if (side1 == "CHIPS") {
        let confirmSide1 = prompt(`The${sides.chips.name} will be $${sides.chips.cost}. Is that what you want?`).toString().toUpperCase();
        if (confirmSide1 == "YES") { alert(`Great choice!`); }
        else { orderSide1(); }
    } else {
        alert(`Sorry, What did you say.`)
        orderSide1();
    }
}


const orderSide2 = () => {
    side2 = prompt(`What would you like for your Second Side?
    (Fries, Salad, or Chips)
    `).toUpperCase();
    if (side2 == "FRIES") {
        let confirmSide2 = prompt(`The${sides.fries.name} will be $${sides.fries.cost}. Is that what you want?`).toString().toUpperCase();
        if (confirmSide2 == "YES") { alert(`Great choice!`); }
        else { orderSide2(); }
    }
    else if (side2 == "SALAD") {
        let confirmSide2 = prompt(`The${sides.salad.name} will be $${sides.salad.cost}. Is that what you want?`).toString().toUpperCase();
        if (confirmSide2 == "YES") { alert(`Great choice!`); }
        else { orderSide2(); }
    }
    else if (side2 == "CHIPS") {
        let confirmSide2 = prompt(`The${sides.chips.name} will be $${sides.chips.cost}. Is that what you want?`).toString().toUpperCase();
        if (confirmSide2 == "YES") { alert(`Great choice!`); }
        else { orderSide2(); }
    }
    else {
        alert(`Sorry, What did you say.`)
        orderSide2();
    }
}

const confirmOrder = () => {
    let orderConfirm = prompt(`You'r order is ${entree} for your Entree and ${side1} and ${side2} as your two sides?`).toString().toUpperCase();
    if (orderConfirm == "YES") {
        alert(`Coming Up! ;)`);
    }
    else if (orderConfirm == "NO") { changeOrder(); }
    else {
        alert(`Sorry, What did you say.`)
        confirmOrder();
    }
}

const changeOrder = () => {
    let wrongOrder = prompt(`What do you want to change, your Entree or your Sides?`).toString().toUpperCase();
    if (wrongOrder == "ENTREE") { orderEntree(); confirmOrder(); }
    else if (wrongOrder == "SIDES") { orderSides(); confirmOrder(); }
    else {
        alert(`Sorry, What did you say.`)
        changeOrder();
    }
}

checkout = () => {

    if (entree == "CHICKEN") {
        entreePrice = entrees.pst.cost;
    }
    else if (entree == "STEAK") {
        entreePrice = entrees.stk.cost;
    }
    else if (entree == "BURGER") {
        entreePrice = entrees.pst.cost;
    }

    if (side1 == "FRIES") {
        side1Price = sides.fries.cost;
    }
    else if (side1 == "SALAD") {
        side1Price = sides.salad.cost;
    }
    else if (side1 == "CHIPS") {
        side1Price = sides.chips.cost;
    }

    if (side2 == "FRIES") {
        side2Price = sides.fries.cost;
    }
    else if (side2 == "SALAD") {
        side2Price = sides.salad.cost;
    }
    else if (side2 == "CHIPS") {
        side2Price = sides.chips.cost;
    }
    total = parseFloat(entreePrice + side1Price + side2Price).toFixed(2);
    alert(`Your Total is $${total}. Thanks for coming in and have a great day!`)
}

dinner = () => {
    welcome();
    order();
    checkout();
}

dinner();

console.log(`Customer ordered the ${entree}, the ${side1}, and the ${side2}`);