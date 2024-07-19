const { response } = require('express');
const contactusModel = require('../model/contactus');

const contactusController = {
    saveContactUs : async(req,res)=>{
        try{
        let saveData = {
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message
        }
        await contactusModel.create(saveData);
        return res.status(200).send('Thanks for contact us .. we will reach you soon ..!!!');
        }catch(error){
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }   
}
module.exports = contactusController;