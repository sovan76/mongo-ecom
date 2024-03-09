const db=require('../util/database');
const Cart =require('./cart');
const fs=require('fs');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
     return db.execute('INSERT INTO  products  (title, price, imageurl, description)  VALUES (?,?,?,?)',
     this.title,this.price, this.imageUrl, this.description );
  }
  static deletedById(id){

  }
  static fetchAll() {
    return db.execute('SELECT * FROM products LIMIT 1');
  }
  static findById(){


  }

};
