const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const shopcontroller=require('../controllers/shop');

const router = express.Router();

router.get('/', shopcontroller.getIndex);
  // res.render('shop');
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// router.get('',shopcontroller.pagefault);
router.get('/products',shopcontroller.getshop);

// router.get('/cart',shopcontroller.getcart);
 

// router.get('/orders',shopcontroller.getorders);

// router.get('admin/products',shopcontroller.getprodetail);

module.exports = router; 
  