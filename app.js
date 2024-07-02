const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorcontroller= require('./controllers/error');
const session= require('express-session');
// const MongoDBStore= require('connect-mongodb-session')(session);
// const db= require('./util/database');

const app = express();

// const store= new MongoDBStore({
    
// });

app.set('view engine','ejs');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 
const authroutes = require('./routes/auth');
const mongoconnect = require('./util/database').mongoconnect;
const multer= require('multer');
const { MongoDBStore } = require('connect-mongodb-session');
 

app.use(bodyParser.urlencoded({extended: false}));        //body parser before the middle wares
app.use(multer({dest:'images'}).single('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'this is my secreat code',resave:false, saveUninitialized:false}));


app.use('/admin', adminRoutes);
app.use(shopRoutes);  
app.use(authroutes);  
app.use(errorcontroller.pagefault);
// app.use((req, res, next) => {         //next is  a func here which passes the control to the next middle ware 
//     res.status(404).render('404',{pageTitle: 'page not found'});
// });
mongoconnect(()=>{
     app.listen(3000);
});

//or const server=http.createserver(app);
// server.listen(3000);
