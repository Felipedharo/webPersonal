import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarbot',
  templateUrl: './navbarbot.component.html',
  styleUrls: ['./navbarbot.component.css']
})
export class NavbarbotComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
