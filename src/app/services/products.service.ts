import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../interface/products.interface';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  product : product [] = [];
  productFiltered: product [] = [];


  constructor( private http: HttpClient ) { 
      this.cargarProductos();
  }

  private cargarProductos(){
    return new Promise( (resolve,reject) =>{
        this.http.get('https://lezicavinosapiens-b2210.firebaseio.com/productos_idx.json')
          .subscribe( (resp : product[] )=> {
           this.product = resp;
           this.loading = false;
           resolve();
       });
    } );    
  }

  getProducto( id: string ){
    return this.http.get(`https://lezicavinosapiens-b2210.firebaseio.com/productos/${ id }.json`);
  };

  buscarProducto (termino: string){
    if (this.product.length === 0) {
        this.cargarProductos().then(() =>{
         this.filterProducts(termino)
        })
    }else{
       this.filterProducts(termino)
    }   
    console.log(this.productFiltered)
  };
  
  private filterProducts( termino: string){ 
    this.productFiltered = [];
    termino = termino.toLocaleLowerCase();
    this.product.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino)>= 0  || tituloLower.indexOf(termino)>= 0) {
        this.productFiltered.push(prod);
      }
    })

}

}

