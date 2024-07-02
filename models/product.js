const getDb=require('../util/database').getDb;
// const Cart =require('./cart');
const mongodb =require('mongodb');

module.exports=class Product {
  constructor(id,title, price, description, imageurl) {
    this._id = id ;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageurl = imageurl;
  }
  
  save() {
     const db=getDb();
     let dbOp;
     if(this._id){
         // update the product 
         dbOp= db.collection('products').updateOne({
              _id: new mongodb.ObjectId(this._id)
         }, {  $set :this              // update oper 
         }); 
     }else{
         dbOp=db
        .collection('products').insertOne(this); 
     }
      return dbOp
      .then(result=>{
        console.log(result);
      })
      .catch(err=>{
        console.log(err);
      })
  }

  static fetchAll(){
    const db=getDb();
    return db.collection('products')
    .find()
    .toArray()
    .then(products=>{
      // console.log(products);
      return products;
    })
    .catch(err =>{
      console.log(err);
    })
  }

  static fetchById(prodId){
      const db= getDb();
      return db.collection('products')
      .find({_id :new mongodb.ObjectId(prodId)})
      .next()
      .then(product=>{
        // console.log(product);
        return product; 
      })
      .catch(err=>{
        console.log(err);
        throw err;
      });
  }

  static  deleteById(prodId){
     const db= getDb();
     return db.collection('products')
     .deleteOne({_id: new mongodb.ObjectId(prodId) })
     .then(result=>{
        console.log('deleted');
     })
     .catch(err=>{
      console.log(err);
     })
  }
}