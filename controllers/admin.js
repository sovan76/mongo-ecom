const Product = require('../models/product');
const mongodb= require('mongodb');

const ObjectId=mongodb.ObjectId;

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    isauthenticated: req.session.isLoggedIn
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;  
  const description = req.body.description;
  // const imageurl = req.body.imageurl;
  const image = req.file;
  const imageurl=image.path; 

  const product = new Product(null, title, price, description, imageurl);


  product.save()
    .then(() => {
      console.log(imageurl);
      console.log('product created');
      res.redirect('/admin/products');
    }) 
    .catch(err => {
      console.log(err);
      res.status(500).send('Error saving product');
    });
};


exports.getEditProduct = (req, res, next) => {
  // console.log('Accessing edit product page');
  const editMode = req.query.edit;
  // console.log('Edit mode:', editMode);

  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  // console.log(prodId);
  Product.fetchById(prodId)
    .then(product =>{
      if (!product) {
        return res.redirect('/');
      }
       res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product,
        isauthenticated: req.session.isLoggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error editing  product');
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  // const updatedImageurl = req.body.imageurl;
  const image = req.file;
  const updatedImageurl = image.path;
  console.log(updatedImageurl);
    const product= new Product(
      new ObjectId(prodId),
      updatedTitle ,
       updatedPrice,
       updatedDesc,
       updatedImageurl, 
    );
    product.save()
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};


exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(products=>{
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
      isauthenticated: req.session.isLoggedIn
    });
    }).catch(err=>{
     console.log(err);
  });
}

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
  .then(()=>{
    res.redirect('/admin/products');
  })
  .catch(err=>{
    console.log(err);
  })
};
