const router = require("express").Router()

const Movies = require('../model/movieSchema')


router.post("/post",async(req,res)=>{
    console.log(req.body);
    const {name,year,cast,directors,rating} = req.body
    const newMovie = await new Movies({
        name,
        year,
        cast,
        rating,
        directors
    }).save()



    res.json(newMovie)
})


router.get("/year",(req,res)=>{
    Movies.find({"year":{$gt:2010}},{title:1,year:1}).sort({title:1})
})
router.get("/rating",(req,res)=>{
    Movies.find({"imdb.rating":{$gt:8.0}},{directors:1,title:1,imdb:1})
})
router.get("/cast",(req,res)=>{
    Movies.find({$and:[
        {cast:{$in:['Brad Pitt']}},
        {cast:{$in:['Angelina Jolie']}}
    
    ]},{cast:1,title:1})
})


module.exports = router


