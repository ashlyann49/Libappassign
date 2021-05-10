const express = require("express");
const authorsRouter = express.Router();
function router(nav){
     
    var authors = [
        {
            title:'Joseph Barbera',
           
            img:"joseph.jpg"
        },
        {
            title:'J.K.Rowling',
           
            img:"rowling.jpg"
        },
        {
            title:'Pathummayude Aadu',
           
            img:"basheer1.jpg"
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
        nav,
        title:'Library',
        authors
    
    });
    });
    authorsRouter.get('/:i',function(req,res){
       const i = req.params.i
       res.render('author',{
        nav,
       title:'Library',
       author:authors[i]
    });
    });
    return authorsRouter;
}



module.exports = router;