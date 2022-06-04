 const express = require('express');
 // const mongoose = require('mongoose');


 // mongoose.Promise = global.Promise;
 // mongoose.connect('mongodb://localhost:27017/Library', {
 //     useNewUrlParser: true,
 //     useUnifiedTopology: true
 // });

 // solving bodyParser is not defined error
 const bodyParser = require('body-parser');
 const path = require('path');
 const cors = require('cors');
 const mongoose = require('mongoose');

 const nav = [{
         link: "/books",
         title: "Books"
     },
     {
         link: "/authors",
         title: "Authors"
     },
     {
         link: "/addbook",
         title: "Add Book"
     },
     {
         link: "/addauthor",
         title: "Add Author"
     }
 ]

 const loginRouter = require('./src/routes/loginroute');
 const signupRouter = require('./src/routes/signuproute');
 //homeroute to homrrouter
 const homeRouter = require('./src/routes/homerouter');
 const booksRouter = require('./src/routes/booksroute');
 const authorsRouter = require('./src/routes/authorsroute');

 const app = new express;


 app.set('views', './src/views');
 app.set('view engine', 'ejs');




 // bodyParser

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.static(path.join(__dirname, '/public')));

 app.use('/login', loginRouter);
 app.use('/signup', signupRouter);
 app.use('/home', homeRouter);
 app.use('/books', booksRouter);
 app.use('/authors', authorsRouter);



 app.get('/', function(req, res) {

     res.render('index', {});

 });


 //  const PORT = 5000;
 // created port variable and intialized with 3000

 //  app.listen(PORT, () => {
 //      console.log(`Server Ready on ${PORT}`);
 //  });
 app.listen((process.env.PORT || 5000));