const express = require("express");
const booksRouter = express.Router();
const Bookdata=require('../model/Bookdata')
function router(nav){
     
    //var books = [
        // {
            // title:'Tom and Jerry',
            // author:'Joseph Barbera',
             //genre:'Cartoon',
            // img:"tom.jpg"
        // },
        // {
             //title:'Harry Potter',
             //author:'J K Rowling',
             //genre:'Fantasy',
             //img:"harry.jpg"
         //},
        // {
            // title:'Pathummayude Aadu',
             //author:'Basheer',
             //genre:'Drama',
            // img:"harry.jpg"
         //}
     //]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            
            });
        })
        
    });
    booksRouter.get('/:i',function(req,res){
       const i = req.params.i
       Bookdata.findOne({_id: i})
       .then(function(book){
        res.render('book',{
            nav,
           title:'Library',
           book
        });
       })
      
    });
    return booksRouter;
}



module.exports = router;
