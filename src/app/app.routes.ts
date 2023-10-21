import { Routes } from '@angular/router';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pai',
  },
  { path: 'pai', component: PaiComponent },
  { path: 'filho', component: FilhoComponent },
];
