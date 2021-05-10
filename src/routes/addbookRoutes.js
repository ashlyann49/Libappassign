const express = require("express");
const addbookRouter = express.Router();
function addbookRoute(nav,addbook){
addbookRouter.get('/',function(req,res){
  res.render("addbook",{
        nav,    addbook,
       title:'Add Book',
  
    
   });});
   return addbookRouter;
}
module.exports=addbookRoute;