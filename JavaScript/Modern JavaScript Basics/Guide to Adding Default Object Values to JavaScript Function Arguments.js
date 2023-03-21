const blog = {
    title: 'My great post'
}

const openGraphMetadata = ({ title, summary = "A DailySmary post" }) => {
    console.log(`
        og-title=${title}
        og-description=${summary}
    `);
}

openGraphMetadata(blog);

const user = {
    username: 'Ian',
    // status: 'active'
}

const loginEvent = ({ username, status = 'away' }) => {
    return(`your_${username} is ${status}`);
}

loginEvent(user);