const router = require("express").Router()

const Movies = require('../model/movieSchema')


router.post("/post",async(req,res)=>{
    console.log(req.body);
    const {name,year,cast,directors} = req.body
    const newMovie = await new Movies({
        name,
        year,
        cast,
        directors
    }).save()

    res.json(newMovie)
})

module.exports = router


