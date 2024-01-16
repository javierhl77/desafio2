

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
  readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8")
    return JSON.parse(respuesta);
  }

  getProducts = async ()  => {

    let respuesta1 = await this.readProducts()
    return console.log(respuesta1)  }

  getProductsById = async (id) => {
     let respuesta2 = await this.readProducts()
     let filter = respuesta2.find(product => product.id === id)
     //console.log(filter)
     if ( !respuesta2.find(product => product.id === id) ) {
      console.log("no existe el producto")
     } else {
      console.log(filter)
     }
  }


  deleteProductById = async (id ) => {
    let resp = await this.readProducts();
    let prodFilter = resp.filter(products => products.id != id)
    await fs.writeFile( this.patch, JSON.stringify(prodFilter))

    console.log("producto eliminado");
  }
  updateProducts = async (producto ) =>  {
   console.log(producto)

  }
   


}
const products = new ProductManager;
products.addProduct("doña paula","tinto malbec",3500,"imagen","abc124",24);
products.addProduct("aminga","tinto malbec",3500,"imagen","abc1245",24);

//products.getProducts();
//products.getProductsById(2);
//products.deleteProductById(1);

products.updateProducts( {
  "title":"aminga",
"description":"tinto malbec",
"price":6500,"img":"imagen",
"code":"abc1245",
"stock":24,
"id":2

})
