import User from "../models/user.js";
import bcrypt from "bcrypt"

export const getSignUp = (req, res) => {
    res.render("signup", { error: null });
};

export const postSignUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.render("signup", { error: "User already exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        await User.create({
            name,
            email,
            password: hashPassword,
            role: "user" // Set to "admin" manually in DB if needed
        });

        res.redirect("/login");
    } catch (error) {
        res.render("signup", { error: "Error creating user." });
    }
};