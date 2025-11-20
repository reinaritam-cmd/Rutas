import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Parcial } from './pages/parcial/parcial';

export const routes: Routes = [
  { path: 'home', component: Home }, // Agrega esta línea
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a '/home'
  { path: 'parcial', component: Parcial },

];