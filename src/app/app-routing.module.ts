import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component: AuthComponentComponent
  },
  {
    path: 'auth',
    component: AuthComponentComponent
  },
  {
    path: 'home-menu',
    loadChildren: () => import('./home-menu/home-menu.module').then( m => m.HomeMenuPageModule)
  },
  {
    path: 'listas-facturas',
    loadChildren: () => import('./listas-facturas/listas-facturas.module').then( m => m.ListasFacturasPageModule)
  },
  {
    path: 'registro-facturas',
    loadChildren: () => import('./registro-facturas/registro-facturas.module').then( m => m.RegistroFacturasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
