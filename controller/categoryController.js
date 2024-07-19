const {response} = require('express');
const categoryModel = require('../model/category');

const categoryController ={
    saveCategory : async(req,res)=>{
        try{
            const {title,paragraph} = req.body;
            const image = req.file;
            console.log(image);

            if(!title || !paragraph ||  !image){
                return res.status(404).send('Please give All Details ');
            }
            const imageName = image.originalname;
            console.log(imageName)   ;   // Extract the original file name
            const imageUrl = `http://localhost:8081/Images/${imageName}`;
    
            const newCategory = new categoryModel({
                title: title,
                paragraph: paragraph,         
                image: imageUrl                       // Save only the image name in the database
            });
    
            await newCategory.save();
            return res.status(200).send('Category Added Successfully');

        }catch(error){
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    },
    getAllCategories : async(req,res) =>{
        try{
            const categories = await categoryModel.find();
            return res.status(200).send(categories);
        }catch(error){
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    },
    getCategoryByCategoryId : async(req,res) =>{
        try{
            const categoryId = req.params.categoryId;
            const category = await categoryModel.findById({_id:categoryId});
            if(!category){
                return res.status(404).send('Category Not Found');
            }
            return res.status(200).send(category);

        }catch(error){
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }
    }
}
module.exports = categoryController;
