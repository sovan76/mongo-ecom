const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const router = express.Router();

const admincontroller=require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', admincontroller.getAddProduct);
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  //  res.render('add-product');

//  /admin/products =>GET
router.get('/products',admincontroller.getProducts);

// /admin/add-product => POST
router.post('/add-product',admincontroller.postAddProduct);

module.exports = router;
