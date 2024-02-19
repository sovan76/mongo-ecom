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
   
  }
  static deletedById(id){

  }
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
  static findById(){

  }

};
