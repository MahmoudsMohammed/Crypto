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
    path: 'layout',
    loadChildren: () =>
      import('../app/pages/pages.routes').then((m) => m.routes),
  },
  // { path: '**', redirectTo: '' },
];
