import { Injectable } from '@angular/core';
import{InfoPagina}from'../interfaces/infogeneral';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {
  info: InfoPagina = {};
  cargada = false;


  constructor( private http: HttpClient ) {

    this.cargarInfo();
  
  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      
    });
  }
}
