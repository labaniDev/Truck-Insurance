const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    subject:{type:String},
    message:{type:String}
})
const contactusModel = mongoose.model('contactus' , ContactSchema,'contactus');

module.exports =  contactusModel;