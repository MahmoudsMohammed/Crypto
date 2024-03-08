import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./share/components/loader/loader.component').then(
        (m) => m.loaderComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/pages/home/home.component').then((m) => m.home),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('../app/pages/details/details.component').then(
        (m) => m.DetailsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
