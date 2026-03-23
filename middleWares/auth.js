import jwt from "jsonwebtoken"
const isAuth = (req, res, next) => {
//  check for the token 
   const token = req.cookies.token
   if(!token){
       return res.redirect("/login")
   }
   try {
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    req.user = decoded
    next()
   } catch (error) {
    console.log(error);
    
    return res.redirect("/")
    
   }
        
   
};
export default isAuth