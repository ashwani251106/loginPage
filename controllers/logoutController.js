 export const logoutGet = (req, res) => {
   res.clearCookie("token")
   res.redirect("/")
};
