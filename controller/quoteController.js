const {response} = require('express');
const quoteModel = require('../model/quote');

const quoteController ={

    addQuote : async(req,res) =>{
        try{
            let saveQuote = {
                companyname: req.body.companyname, 
    companyowner: req.body.companyowner,
    dot : req.body.dot,
    mc : req.body.mc,
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    street : req.body.street,
    city : req.body.city,
    state : req.body.state,
    zip : req.body.zip,
    phno : req.body.phno,
    altphno : req.body.altphno,
    email : req.body.email,
    noofvehicle : req.body.noofvehcle,
    vehiclemodelyear : req.body.vehiclemodelyear,
    make : req.body.make,
    model :req.body.model,
    drivers : req.body.drivers,
    driverlicensenumber : req.body.driverlicensenumber,
    state : req.body.state ,
    otherinformation : req.body.otherInformation
            }

            await quoteModel.create(saveQuote);
            return res.status(200).send('Quote added successfully');

        }catch(error){
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    },
    getAllQuotes : async(req,res)=>{
        try{
            const quotes = await quoteModel.find();
            return res.status(200).send(quotes);
        }catch(error){
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }
}
module.exports = quoteController;