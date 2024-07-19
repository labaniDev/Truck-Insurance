// const express=require('express') //imports the express module(the framework of node.js) allowing you to creeate an express apllication instance using cons app
// const app = express()
// const mongoose=require('mongoose')
// const cors = require("cors");
// const multer = require('multer');
// const path = require('path');
// const AppRouter=require("./router/AppRouter");
// require("dotenv").config();

// console.log('MONGO_DB_URL:', process.env.MONGO_DB_URL);




// mongoose.connect(process.env.MONGO_DB_URL)
//   .then(() => console.log("Connected to DB!"))
//   .catch((error) => console.log(error));


// //
// const corsOptions ={
//     origin:'*', 
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// app.use(cors());
// app.use(express.json()); 
// app.use(express.urlencoded({extended:false}))
// app.use('/images', express.static(path.join(__dirname, 'public', 'Images')));


// //add routes
// app.use("/api",AppRouter)



// const HOST = process.env.HOST || "0.0.0.0";
// const PORT = process.env.PORT || 8081;
// app.listen(PORT, HOST);
// console.log(`Server is Running on http://${HOST}:${PORT}`);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const AppRouter = require("./router/AppRouter");
const cors = require("cors");
const multer = require('multer');
const path = require('path');
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error));

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 app.use('/images', express.static(path.join(__dirname, 'public', 'Images')));

app.use("/api", AppRouter);

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 8081;
app.listen(PORT, HOST);
console.log(`Server is Running on http://${HOST}:${PORT}`);
