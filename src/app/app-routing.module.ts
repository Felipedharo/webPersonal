import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';

import { SidebarComponent } from './shere/sidebar/sidebar.component';


const app_routes: Routes = [
  // {path :'landing', component: LandingPageComponent },
  // {path :'servicios', component: ServicioComponent },
  //  {path :'cv', component: SidebarComponent },

  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  {path :'**', pathMatch: 'full', redirectTo:'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
