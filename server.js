//server instance 
const express = require('express');
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000

// Apply CORS middleware before any route handlers
app.use(cors({
    origin: 'https://company-listing-app-five.vercel.app' && "http://localhost:5173",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

// require middlewere to add parcel
app.use(express.json());

//import routes for Company API
const companyRoutes = require('./routes/company')

//mount the api routes 
app.use("/api/v1", companyRoutes);

//activate the server on port 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})



//connect to the database
const dbConnect = require("./config/database");
dbConnect();


//default routes
app.get("/", (req,res)=>{
    res.send('<h1> This is homepage<h1>')
})