const express = require('express');
const AppRouter = express.Router();
const multer=require("multer");
const path=require("path")

const userController = require('../controller/userController');
const contactusController = require('../controller/contactusController');
const categoryController = require('../controller/categoryController');
const quoteController = require('../controller/quoteController');

const storage = multer.diskStorage({
    destination: "./public/Images",
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original name of the file
    }
  });
  
  const upload=multer({storage:storage}).single('image');


//userController
AppRouter.post('/register',userController.register);
AppRouter.post('/login',userController.login);
AppRouter.get('/getAllUsers',userController.getAllUsers);
AppRouter.put('/updateUser/:userId',userController.updateUser);
AppRouter.post('/deleteUser/:userId',userController.deleteUser);

//contactusController
AppRouter.post('/addcontactus',contactusController.saveContactUs);

//categoryController
AppRouter.post('/addCategory',upload,categoryController.saveCategory);
AppRouter.get('/getAllCategory',categoryController.getAllCategories);
AppRouter.get('/getCategoryByCategoryId/:categoryId',categoryController.getCategoryByCategoryId);

//quoteController
AppRouter.post('/addQuote',quoteController.addQuote);
AppRouter.get('/getQuote',quoteController.getAllQuotes);

module.exports = AppRouter;