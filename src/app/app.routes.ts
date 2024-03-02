import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'home',loadComponent:()=>import('../app/pages/home/home.component').then(m=>m.home)},
  {path:'crypto/:id',loadComponent:()=>import('../app/pages/details/details.component').then(m=>m.cryptoDetails)},
  {path:'**',redirectTo:'home'}
];
