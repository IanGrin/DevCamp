// prettyPrice(3.50, 0.95) // 3.95
// prettyPrice(3.32, 0.95) // 3.95
// PrettyPrice(100, 0.95) // 3.95
// PrettyPrice(3.50, 95) // 3.95
// PrettyPrice(3.52, 95) // 3.95
// PrettyPrice(100, 95) // 3.95

const prettyPrice = (grossPrice, extension) => {
    if (Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(grossPrice) + extension;
}

prettyPrice(3.42, 0.99)//?
prettyPrice(3.42, 99)//?
