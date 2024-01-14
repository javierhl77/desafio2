

import {promises as fs} from "fs";

//const fs = require ('fs');

//const persona = async() => {
 // await fs.writeFile("./persona.txt","hola");
  //await fs.appendFile("./persona.txt", "bien y tu")
  //let respuesta = await fs.readFile("./persona.txt","utf-8");
  //console.log(respuesta);
  //(await fs.promises.unlink("./persona.txt");

//persona();

//desafio2

class ProductManager {
  constructor( ){
    this.patch = "./products.txt"
    this.products = []
  }

  static id = 0;

  addProduct = async ( title,description,price,img,code,stock) => {

    ProductManager.id++
    let newProd = {
      title,
      description,
      price,
      img,
      code,
      stock,
      id: ProductManager.id
    }

    this.products.push(newProd)


     //console.log(newProd);
    //await fs.writeFile( this.patch, "holla como estas")
    await fs.writeFile( this.patch, JSON.stringify(this.products))

  }

  getProducts = async ()  => {

    let respuesta = await fs.readFile(this.patch, "utf-8");
    console.log(JSON.parse(respuesta))
  }

  getProductsById = async (id) => {

     
  }
}
const products = new ProductManager;
products.addProduct("doña paula","tinto malbec",3500,"imagen","abc124",24);

products.getProducts();