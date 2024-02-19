const Product = require('../models/product');

exports.getshop=(req,res,next)=>{
    const products= Product.fetchAll();
     res.render('shop/product-list',{
        prods:products,
        pageTitle: 'All products',
        path: '/products' 
     });
};

exports.getIndex=(req,res,next)=>{
    Product.fetchAll()
   .then(([rows,fieldData])=>{
      res.render('shop/index',{
         prods: rows,
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

exports.getcheckout=(req,res,next)=>{
   res.render('shop/checkout',{
      path: '/checkout',
      pageTitle: 'checkout'
   })
}
exports.getprodetail=(req,res,next)=>{
}






