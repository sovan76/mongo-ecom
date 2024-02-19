const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorcontroller= require('./controllers/error');
const db= require('./util/database');

const app = express();

app.set('view engine','ejs');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// db.execute('SELECT * FROM  products')
// .then(result=>{
//     console.log(result);
// })
// .catch(err=>{
//     console.log(err);
// });

app.use(bodyParser.urlencoded({extended: false}));        //body parser before the middle wares
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);  
app.use(errorcontroller.pagefault);
// app.use((req, res, next) => {           //next is  a func here which passes the control to the next middle ware 
//     res.status(404).render('404',{pageTitle: 'page not found'});
// });

app.listen(3000);

//or const server=http.createserver(app);
// server.listen(3000);
