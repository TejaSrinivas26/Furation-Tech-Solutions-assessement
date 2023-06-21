const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    image_url:{
        type:String,
        default:'https://images-na.ssl-images-amazon.com/images/I'
    },
    available: {
        type: Boolean,
    }
});

module.exports = mongoose.model("Book", bookSchema);