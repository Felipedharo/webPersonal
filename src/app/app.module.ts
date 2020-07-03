import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shere/navbar/navbar.component';
import { FooterComponent } from './shere/footer/footer.component';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';
import { SidebarComponent } from './shere/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    SidebarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
