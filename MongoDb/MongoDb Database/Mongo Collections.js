db.books.insertOne({
   "name": "OOP Programming",
   "startDate": new Date(),
   "authors": [
    { "name": "Superman" }
   ] 
})

db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            { "name": "Avdi Grimm" }
        ]
    },
    {
        "name": "The War of Art",
        "publishedDate": new Date(),
        "authors": [
            { "name": "Steven Pressfield" }
        ]
    },
    {
        "name": "Blink",
        "publishedDate": new Date(),
        "authors": [
            { "name": "Malcolm Gladwell" }
        ]
    }
])
