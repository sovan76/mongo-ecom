const Product = require('../models/product');

exports.getshop=(req,res,next)=>{
    Product.fetchAll()
    .then(products =>{         
     res.render('shop/product-list',{
        prods: products,
        pageTitle: 'All products',
        path: '/products' ,
        isauthenticated: req.session.isLoggedIn
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
         path: '/' ,
         isauthenticated: req.session.isLoggedIn
      });
   })
   .catch(err=>{ 
      console.log(err);
   });
} 

exports.getProduct=(req,res,next)=>{
   const prodId= req.params.id;
   Product.fetchById(prodId)
   .then(product=>{ 
      res.render('shop/product-detail',{
      product: product,
      pageTitle: product.title,
      path: '/products' ,
      isauthenticated: req.session.isLoggedIn
   })
   ;}).catch(err=>{ 
      console.log(err);
   });
}
exports.getcart=(req,res,next)=>{
   res.render('shop/cart',{
      pageTitle: 'shop',
      path: '/cart' ,
      isauthenticated: req.session.isLoggedIn
   });
}

exports.getorders=(req,res,next)=>{
      res.render('shop/orders',{
       pageTitle: 'orders',
      path: '/orders' ,
      isauthenticated: req.session.isLoggedIn
   })
}
exports.getprodetail=(req,res,next)=>{
}






