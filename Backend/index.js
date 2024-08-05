const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins"); 
const userRoute  = require("./routes/users");

//extracting secret codes from .env
dotenv.config();

//calling the data in json format 
app.use(express.json());

//connecting mongodb
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongodb connected");
}).catch((err)=>{
    console.log(err);
});

//routes
app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

//Port calling
app.listen(8800,()=>{
    console.log("Backend server is running")
})