db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
)

  
  db.books.find({ reviews: { $exists: true } })
  db.books.find({ reviews: { $exists: false } })