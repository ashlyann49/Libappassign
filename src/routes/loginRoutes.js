const express = require("express");
const loginRouter = express.Router();
function loginRoute(nav,login){
loginRouter.get('/',function(req,res){
  res.render("login",{
        nav,    login,
       title:'Login',
  
    
   });});
   return loginRouter;
}
module.exports=loginRoute;