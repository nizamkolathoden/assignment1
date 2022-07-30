const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:String,
    year:Number,
    cast:Array,
    directors:Array,
    imdb:{rating:Number}

   
})


module.exports = mongoose.model('movie',movieSchema);