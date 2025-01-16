const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");
const Post = require("./Models/post");
const User = require("./Models/user");

const app = express();

// Constants
const salt = bcrypt.genSaltSync(10);
const secret = "hvdukfvwefuwyeifwwhveifuyevfwiefwiebcnwoine";
const uploadDir = path.join(__dirname, "uploads");

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
// app.use("/uploads", express.static(uploadDir));
app.use('/uploads', express.static('uploads'));

// Configure Multer for file uploads
const uploadMiddleware = multer({ dest: "uploads/" });

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Database connection
mongoose.connect("mongodb+srv://000sheikhsiddiqui:s0SpqLDWuAeq3K56@cluster0.f9twh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Routes
app.get("/", (req, res) => {
    res.send("mohsin dada");
});

// Signup Route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const UserDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(UserDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("Email and password are required");
    }

    const userDoc = await User.findOne({ email });
    if (!userDoc) {
        return res.status(400).json("User not found");
    }

    const passok = bcrypt.compareSync(password, userDoc.password);
    if (passok) {
        jwt.sign(
            { email, id: userDoc._id, username: userDoc.name },
            secret,
            {},
            (err, token) => {
                if (err) throw err;
                res.cookie("token", token)
                .json({
                    id: userDoc._id,
                    email,
                    username: userDoc.name,
                });
            }
        );
    } else {
        res.status(400).json("Wrong credentials");
    }
});

// Profile Route
app.get("/profile", (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json("Token not provided"); // Handle missing token
    }

    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            return res.status(403).json("Invalid token"); // Handle verification failure
        }
        res.json({
            id: info.id,
            email: info.email,
            username: info.username,
        });
    });
});

// Post Creation Route
app.post("/post", uploadMiddleware.single("files"), async (req, res) => {
    const { originalname, path: tempPath } = req.file || {};

    if (!req.file) {
        return res.status(400).json("File is required"); // Validate file existence
    }

    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path.join(uploadDir, `${req.file.filename}.${ext}`);

    try {
        // Move uploaded file to the correct directory
        fs.renameSync(tempPath, newPath);

        // Extract token from cookies
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json("Token not provided");
        }

        // Verify JWT token
        jwt.verify(token, secret, {}, async (err, info) => {
            if (err) throw err;

            const { title, summary, content } = req.body;

            if (!title || !summary || !content) {
                return res.status(400).json("All fields are required");
            }

            const postDoc = await Post.create({
                title,
                summary,
                content,
                cover:  `/uploads/${req.file.filename}.${ext}`,
                author: info.id,
            });

            res.json(postDoc);
        });
    } catch (err) {
        console.error("Error during file handling:", err);
        res.status(500).json("Internal Server Error");
    }
});

// Logout Route
app.post("/logout", (req, res) => {
    res.cookie("token", "").json("ok");
});




app.get("/post", async (req, res) => {
   


    try {
        const posts = await Post.find()
            .populate("author", ["name", "email"])
            .sort({ createdAt: -1 })
            .limit(20);
        res.json(posts);
    } catch (err) {
        console.error("Error fetching posts:", err);
        res.status(500).json({ error: "Failed to fetch posts" });
    }


});



app.get('/post/:id',async function(req,res){

   const {id}=req.params;

   const postDoc=await Post.findById(id).populate('author',['name']);

   res.json(postDoc);
})





app.get("/dashboard/:id", async (req, res) => {
    const { id } = req.params;
   

    console.log("Backend ka hun mai:", id);
  
    try {
        // .populate('author', ['name']);
      const myPost = await Post.find({author:id})
      console.log(myPost)
    //   if (!myPost) {
    //     return res.status(404).json({ message: "No post found for this ID" });
    //   }
      res.json(myPost);
    } catch (error) {
      console.error("Error fetching from database:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });


// Server Setup
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
