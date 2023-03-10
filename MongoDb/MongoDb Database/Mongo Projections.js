db.books.find(
    {
        "name": "Confident Ruby"
    },
    {
        "_id": 0,
        "name": 1,
        "authors" :1
    }
)

db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});