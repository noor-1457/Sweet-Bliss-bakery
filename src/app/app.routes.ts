import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full',
  },
  {
    path: 'tab',
    loadChildren: () =>
      import('./pages/tab/tab.route').then((m) => m.routes),
  },
];
