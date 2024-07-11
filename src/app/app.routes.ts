import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/homepage/homepage.module').then((m) => m.HomepageModule),
  },
]