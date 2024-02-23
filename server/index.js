import express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import User from "./models/User.js";
import cors from "cors"; // Import the cors middleware

dotenv.config()
const app = express();

// Use cors middleware with specific options to allow requests from http://localhost:3000
app.use(cors());
 

app.use(express.json())

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

connectMongoDB();

app.get('/', (req, res) => {
    res.send('OK');
});
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });

    try {
        const savedUser = await newUser.save();
        return res.status(201).json({
            success: true,
            data: savedUser,
            message: "User registered successfully"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.post('/api/loginusers', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide an email and a password"
        });
    }

    try {
        const loginUser = await User.findOne({ email, password });
        if (!loginUser) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        return res.status(200).json({
            success: true,
            data: loginUser,
            message: "User logged in successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
});



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
