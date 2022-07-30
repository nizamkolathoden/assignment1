db.movies.find({"year":{$gt:2010}},{title:1,year:1}).sort({title:1})
db.movies.find({"imdb.rating":{$gt:8.0}},{directors:1,title:1,imdb:1})
db.movies.find({$and:[
    {cast:{$in:['Brad Pitt']}},
    {cast:{$in:['Angelina Jolie']}}

]},{cast:1,title:1})
    
    
    