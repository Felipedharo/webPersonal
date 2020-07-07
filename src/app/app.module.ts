import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { NavbarComponent } from './shere/navbar/navbar.component';
import { FooterComponent } from './shere/footer/footer.component';

import { CvComponent } from './Page/cv/cv.component';

import { NavbarbotComponent } from './shere/navbarbot/navbarbot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavbarbotComponent,
    CvComponent, 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
