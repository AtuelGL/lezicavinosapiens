import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

info : InfoPagina = {};
loaded = false;
equipo: any[] = [] 

  constructor( private http: HttpClient ) { 

    this.cargarInfo();
    this.cargarEquipo()

  }

private cargarInfo(){
        this.http.get('assets/data/data-page.json')
        .subscribe( (resp : InfoPagina )=> {
              this.loaded = true;
              this.info = resp;
              console.log(resp);
        });
}

private cargarEquipo(){
        this.http.get('https://lezicavinosapiens-b2210.firebaseio.com/equipo.json')
        .subscribe( (resp : any[] )=> {
            this.equipo = resp;
            console.log(resp);
        });
}

}
