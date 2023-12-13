require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = '3000'
const connectDB = require("./config/db")


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://demouser:drowssap@cluster0.gyfkbdj.mongodb.net/?retryWrites=true&w=majority";

const BlogPostSchema = new Schema({
    title: String,
    body: String,
    start_date: Date,
    end_date: Date,
    location: String
});

const BlogPost = mongoose.model(
    'BlogPost',
    BlogPostSchema
)

const blogPostOne = new BlogPost({
    title: "Trip One",
    body: "This is the body for Trip One",
    start_date: new Date("2024-01-01"),
    end_date: new Date("2024-02-01"),
    location: "Costa Rica"
})
// blogPostOne.save().then(() => console.log('success'));
//Connect

app.get("/api/travelapp/blogpost", async (req, res) => {
    const blogPost = await BlogPost.find()
    res.send(blogPost)
})

app.post("/api/travelapp/blogpost", async (req, res) => {
    const newBlogPost = new BlogPost(req.body)
    await newBlogPost.save().then(() => console.log(`blog posted`))
    res.status(201).send(newBlogPost)
})

connectDB()

mongoose.connection.once('open', () => {
    console.log("Connect to MongoDB");
    app.listen(port, () => console.log(`Server running on port ${port}`))
})