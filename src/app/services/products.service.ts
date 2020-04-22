import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../interface/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  product : product [] = [];


  constructor( private http: HttpClient ) { 

      this.cargarProductos();

  }

  private cargarProductos(){
    this.http.get('https://lezicavinosapiens-b2210.firebaseio.com/productos_idx.json')
    .subscribe( (resp : product[] )=> {
      this.product = resp;
      this.loading = false;
  });
  }

  getProducto( id: string ){
    return this.http.get(`https://lezicavinosapiens-b2210.firebaseio.com/productos/${ id }.json`);
    

  };
  


}

