import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFacturasPage } from './registro-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFacturasPageRoutingModule {}
