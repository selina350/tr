require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = '3000'
const connectDB = require("./config/db")
app.listen(port, () => console.log(`server is running on port${port}`))

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://demouser:drowssap@cluster0.gyfkbdj.mongodb.net/?retryWrites=true&w=majority";

//Connect

connectDB()

mongoose.connection.once('open', () => {
    console.log("Connect to MongoDB");
    app.listen(port, () => console.log(`Server running on port ${port}`))
})