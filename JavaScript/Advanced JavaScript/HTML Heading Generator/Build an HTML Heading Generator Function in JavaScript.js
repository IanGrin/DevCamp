const headingGenerator = (title, typeOfHeading) => {
    return `
        <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `
}

// headingGenerator('Greetings', 2);
headingGenerator('Hi there', 5);