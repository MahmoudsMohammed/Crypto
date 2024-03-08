import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { home } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: home },
      { path: 'details/:id', component: DetailsComponent },
    ],
  },
];
