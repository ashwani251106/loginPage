

import User from "../models/user.js";

export const dashBoard =   async (req, res) => {
    try {
        const userData = req.user
      const  {id,role} = userData
       const user = await User.findById(id)
        res.render("dashboard", { userName: user.name });
    } catch (error) {
        res.redirect("/login");
    }
};