import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasFacturasPage } from './listas-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: ListasFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListasFacturasPageRoutingModule {}
