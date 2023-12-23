const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));        //body parser before the middle wares
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {           //next is  a func here which passes the control to the next middle ware 
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

//or const server=http.createserver(app);
// server.listen(3000);
