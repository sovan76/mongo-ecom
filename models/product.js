const getDb=require('../util/database').getDb;
const Cart =require('./cart');


module.exports=class Product {
  constructor(id, title, price, description, imageurl) {
    this.id = id;
    this.title = title;
    this.price = price;  
    this.description = description;
    this.imageurl = imageurl;
  }
 
  save() {
      const db=getDb();
      return db.collection('products').insertOne(this)
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
      console.log(products);
      return products;
    })
    .catch(err =>{
      console.log(err);
    })
  }
}