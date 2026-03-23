import 'dotenv/config';
import express from "express"
import adminRouter from "./routers/adminRouter.js";
import dashBoardRouter from "./routers/dashboardRouter.js"
import loginRouter from "./routers/loginRouter.js"
import logoutRouter from "./routers/logoutRouter.js"
import signupRouter from "./routers/signupRouter.js"
import path from "path"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const app = express();

// --- SETTINGS ---
app.set("view engine", "ejs"); // Fixed: no dash in "view engine"
app.set("views", path.join(__dirname, "views"));

// --- MIDDLEWARES ---
app.use(express.urlencoded({ extended: true })); // CRITICAL: to read form data
app.use(express.json());
app.use(cookieParser())

// --- DATABASE CONNECTION ---
const URI = process.env.MONGO_URI;

mongoose.connect(URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((e) => console.log("❌ DB Connection Error:", e));

// --- USER SCHEMA ---



// --- CUSTOM AUTH MIDDLEWARE ---



// --- ROUTES ---

// Home Page
app.get("/", (req, res) => {
    res.render("home");
});

app.use("/",adminRouter)
app.use("/",dashBoardRouter)
app.use("/",loginRouter)
app.use("/",logoutRouter)
app.use("/",signupRouter)

// --- START SERVER ---
app.listen(process.env.PORT, () => {
    console.log("🚀 Server is running on http://localhost:3000");
});