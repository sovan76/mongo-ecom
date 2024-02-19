const Product = require('../models/product');

exports.getaddproduct=(req,res, next)=>{
     
    res.render('admin/add-product',
     {  pageTitle: 'Add Products',
        path: '/admin/add-products',
        formsCSS:true ,
        productCSS: true,
        activeAddProduct: true     
    });
};

exports.postaddproduct =(req,res, next)=>{

// products.push({title: req.body.title});
const product =new Product(req.body.title);
product.save();
res.redirect('/');  
};
exports.getedit=(req,res, next)=>{
     
    res.render('admin/edit-product',
     {  pageTitle: 'Add Products',
        path: '/admin/edit-products',
        formsCSS:true ,
        productCSS: true,
        activeAddProduct: true     
    });
};
exports.getproducts=(req,res, next)=>{
    const products= Product.fetchall();
    res.render('admin/products',{
       prods: products,
       pageTitle: 'admin products',
       path: '/admin/products' 
    });
};
