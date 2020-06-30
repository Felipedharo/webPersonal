import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/infogeneral';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public infopagina: PaginaService) { }

  ngOnInit() {
  }

}
