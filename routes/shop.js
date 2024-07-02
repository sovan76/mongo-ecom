const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const shopcontroller=require('../controllers/shop');
const { route } = require('./admin');

const router = express.Router();

router.get('/', shopcontroller.getIndex);
  // res.render('shop');
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// router.get('',shopcontroller.pagefault);
router.get('/products',shopcontroller.getshop);

router.get('/products/:id', shopcontroller.getProduct);

// router.get('/cart',shopcontroller.getcart);
 

router.get('/orders',shopcontroller.getorders);

// router.get('admin/products',shopcontroller.getprodetail);

module.exports = router; 
  