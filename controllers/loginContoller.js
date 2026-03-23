
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/user.js";


 export const renderLoginPage =  (req, res) => {
    res.render("login");
};

export const LoginVerifications = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.redirect("/login");
        }

        const checkPass = await bcrypt.compare(password, userFound.password);

        if (checkPass) {
            // jwt token initialisation
            const token = jwt.sign({
                id:userFound._id,
                role:userFound.role,

            },process.env.SECRET_KEY,{
                expiresIn:"3d"
            })

            //! store the jwt token in cookies
            res.cookie("token",token,{
                maxAge:3*24*3600*1000, //3 days,
                httpOnly:true,
                sameSite:"strict",
                secure:false
            }) 
           
            return res.redirect("/dashboard");
        } else {
            return res.redirect("/");
        }
    } catch (error) {
        
       return res.redirect("/login");
    }
};
