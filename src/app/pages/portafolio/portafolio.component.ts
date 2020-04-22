import { Component, OnInit } from '@angular/core';
import { product } from '../../interface/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor( public _Sproduct : ProductsService) { }

  ngOnInit(): void {
  }

}
