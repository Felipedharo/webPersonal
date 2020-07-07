import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvComponent } from './Page/cv/cv.component';






const app_routes: Routes = [
  {path :'cv', component: CvComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cv' },
  {path :'**', pathMatch: 'full', redirectTo:'cv'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
