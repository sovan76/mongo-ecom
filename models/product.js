const db=require('../util/database');
const Cart =require('./cart');
const fs=require('fs');

module.exports=class Product {
  constructor(id, title, price, description, imageurl) {
    this.id = id;
    this.title = title;
    this.price = price;  
    this.description = description;
    this.imageurl = imageurl;
    console.log('Product constructor:', this.title, this.price, this.description, this.imageurl); // Log data in constructor
  }

  save() {
    // if (isNaN(this.price) || this.price < 0 || this.price > 99999999.99) {
    //   return Promise.reject(new Error('Price is out of range or not a number'));
    // }

    // console.log('Inserting product:', this.title, this.price, this.description, this.imageurl); // Log data before insertion

    return db.execute(
      'INSERT INTO products (title, price, description, imageurl) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageurl]
    );
  }
  
  static deletedById(id){
    // return db.execute()

  }  
  static fetchAll() {
    return db.execute('SELECT * FROM products ');
  }
  static findById(){
    

  }

};
