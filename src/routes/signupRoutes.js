const express = require("express");
const signupRouter = express.Router();
function signupRoute(nav,signup){
    signupRouter.get('/',function(req,res){
  res.render("signup",{
        nav,    signup,
       title:'Signup',
  
    
   });});
   return signupRouter;
}
module.exports=signupRoute;