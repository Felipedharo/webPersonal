import { Component, OnInit } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  constructor( ) { }

  ngOnInit() {
  }

}
