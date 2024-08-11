
const express = require("express");

const app = express();

require("dotenv").config;

const PORT = process.env.PORT || 5000 ;

//middleware 

app.use(express.json());

//import the routes

// const blog = require("./routes/blog");

// //mount

// app.use("/api/vi" , blog)
const blog = require("./routes/blog");

// Mount the routes
app.use("/api/v1", blog);


const connectWithDb = require("./config/database");
connectWithDb();

//start the server 

app.listen(PORT , () => {
    console.log(`App is started at ${PORT} no`) ;
})


app.get("/" , (req, res) => {
    res.send(`<h1>This is my home page baby</h1>`)
})