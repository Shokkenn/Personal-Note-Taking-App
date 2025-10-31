import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();
app.use(cors());
dotenv.config()
const port =  process.env.PORT || 4002

// Database Connection Code
try {
   mongoose.connect(process.env.MONGO_URL)
   console.log("conntected to MongoDB")
} catch (error) {
    console.log("Error connecting to MongoDB", error)
}

app.use("/api/notes", noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
