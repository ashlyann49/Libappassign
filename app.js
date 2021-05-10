const express = require("express");
const app = new express();
//const port=process.env.PORT || 2000;
const nav = [
    {
        link:'/books',name:'Books'
    },
        {
            link:'/authors',name:'Authors'
        },
        {
            link:'/signup',name:'Signup'
        },
        {
            link:'/login',name:'Login'
        },
        {
            link:'/addBook',name:'Add Books'
        },
        {
            link:'/addAuthor',name:'Add Authors'
        },
        {
            link:'/admin',name:'Add Book'
        }

    ];
const booksRouter = require('./src/routes/bookRoutes')(nav);

const authorsRouter = require('./src/routes/authorRoutes')(nav);

const signupRouter=require('./src/routes/signupRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const addbookRouter=require('./src/routes/addbookRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter); 
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'


    });
});
//hello?


app.listen(5000);