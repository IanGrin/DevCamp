var someUser = {
    name: 'Ian'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser);

var someName = 'Jane';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}