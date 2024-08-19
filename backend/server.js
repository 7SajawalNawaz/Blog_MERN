// Import required modules
const express = require("express");
const mongoose = require("mongoose");

// Initialize the express application
const app = express();
const port = process.env.PORT || 8000; // Set the port, defaulting to 8000 if not provided

// Middleware to parse JSON requests
app.use(express.json()); // This allows the server to parse JSON data from incoming requests

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://7sajawalnawaz:ssVzTTE78RKOW293@cluster0.zaug1nm.mongodb.net/Loginsignup?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true, // Previously needed to handle the new MongoDB connection string parser, but now deprecated
      useUnifiedTopology: true, // Used for better server discovery and monitoring, also deprecated
    }
  )
  .then(() => {
    console.log("Connected to MongoDB..."); // Log successful connection
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err); // Log any errors during connection
  });

// Define a Mongoose schema and model for articles
const articleSchema = new mongoose.Schema({
  name: String, // The name of the article
  comments: [{ username: String, text: String }], // Array to hold comments with username and text
});

const Article = mongoose.model("Article", articleSchema); // Create a model from the schema

// Endpoint to get article information by name
app.get("/api/article/:name", async (req, res) => {
  try {
    const articleName = req.params.name; // Get the article name from the URL parameter
    const articleInfo = await Article.findOne({ name: articleName }); // Search the database for the article
    if (articleInfo) {
      res.status(200).json(articleInfo); // If the article is found, send it as JSON
    } else {
      res.status(404).json({ message: "Article not found" }); // If not found, send a 404 error with a message
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching article data", err }); // Handle any server errors
  }
});

// Endpoint to create a new article
app.post("/api/article/create", async (req, res) => {
  const { name } = req.body; // Get the article name from the request body

  try {
    const newArticle = new Article({ name, comments: [] }); // Create a new article with an empty comments array
    await newArticle.save(); // Save the new article to the database
    res.status(201).json(newArticle); // Respond with the newly created article
  } catch (err) {
    res.status(500).json({ message: "Error creating article", err }); // Handle any server errors
  }
});

// Endpoint to add a comment to an article
app.post("/api/article/:name/add-comments", async (req, res) => {
  const { username, text } = req.body; // Destructure username and text from the request body
  const articleName = req.params.name; // Get the article name from the URL parameter

  try {
    const article = await Article.findOne({ name: articleName }); // Search for the article in the database
    console.log("Article found:", article); // Log the article information

    if (article) {
      article.comments.push({ username, text }); // Add the new comment to the comments array
      await article.save(); // Save the updated article back to the database
      res.status(200).json(article); // Respond with the updated article
    } else {
      console.log("Article not found with name:", articleName); // Log the article name that wasn't found
      res.status(404).json({ message: "Article not found" }); // If the article is not found, send a 404 error
    }
  } catch (err) {
    console.error("Error adding comment:", err); // Log any errors
    res.status(500).json({ message: "Error adding comment", err }); // Handle any server errors
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}....`); // Log that the server is running
});
