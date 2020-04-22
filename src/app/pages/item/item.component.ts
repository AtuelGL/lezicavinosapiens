import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { productDesc } from '../../interface/productDesc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: productDesc;
  ID: string;




  constructor( private route : ActivatedRoute, 
                public productoService : ProductsService ) { }

  ngOnInit(): void {

    this.route.params.subscribe(paramet => {

        this.productoService.getProducto(paramet['id'])
          .subscribe( (producto: productDesc) => {
           this.producto = producto;
           this.ID = paramet['id'];

          } )
    })
  
  }



}
