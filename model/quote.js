const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    companyname : {type : String},
    companyowner : {type : String},
    dot : {type : String},
    mc :{type :String},
    firstname : {type : String},
    lastname : {type : String},
    street : {type : String},
    city : {type : String},
    state : {type : String},
    zip : {type : String} ,
    phno : {type : String},
    altphno : {type : String},
    email : {type : String},
    noofvehicle : {type : Number},
    vehiclemodelyear : {type : Number},
    make : {type : String},
    model : {type : String},
    drivers : {type : Number},
    driverlicensenumber : {type : Number},
    state : {type : String},
    otherinformation : {type : String}
})

const quoteModel = mongoose.model('Quote',quoteSchema);
module.exports = quoteModel;