
const isAdmin = (req, res, next) => {
   
   const role =  req.user ? req.user.role:null
   if(role==="admin"){
       return next()
   }
   return res.redirect("/login")
};
export default isAdmin