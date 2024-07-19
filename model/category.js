const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title : {type : String},
    image : {
        type : String,
        required : true
    },
    paragraph : {
        type : String
    }
})
const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;