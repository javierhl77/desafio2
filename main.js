

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
  // updateProduct : actualizar producto 
  // ( {id, ...producto}) separo el id del resto de los atributos de producto
  //para conservar el id
  //a) eliminar producto a modificar ,usando deleteProductById
  // b)volverlo a agregar  modificado

  updateProducts = async ( {id, ...producto}) =>  {
   await this.deleteProductById(id); // borrar el producto que quiero actualizar 
   let prod = await this.readProducts(); // prod : guarda el producto que quedo
  
   let prodMod = [ {id, ...producto}, ...prod]; // formar otro 
   console.log(prodMod);
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
