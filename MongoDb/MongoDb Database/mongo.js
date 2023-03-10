db.createUser({
    user: 'Jon',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin'},
        { role: 'readAnyDatabase', db: 'admin'},
        'readWrite'
    ]
})

db.getUsers()
db.dropUser('jon')