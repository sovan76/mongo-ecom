const Product = require('../models/product');

exports.getshop=(req,res,next)=>{
    Product.fetchAll()
    .then(products =>{         
     res.render('shop/product-list',{
        prods: products,
        pageTitle: 'All products',
        path: '/products'  
     }) 
   }).catch(err=>{
      console.log(err);
   });
};

exports.getIndex=(req,res,next)=>{
    Product.fetchAll()
   .then(products=>{
         res.render('shop/index',{
         prods: products,
         pageTitle: 'Shop',
         path: '/' 
      });
   })
   .catch(err=>{ 
      console.log(err);
   });
} 

exports.getcart=(req,res,next)=>{
   res.render('shop/cart',{
      pageTitle: 'shop',
      path: '/cart' 
   });
}

exports.getorders=(req,res,next)=>{
   res.render('shop/orders',{
      path: '/orders',
      pageTitle: 'orders'
   });
}
exports.getprodetail=(req,res,next)=>{
}






