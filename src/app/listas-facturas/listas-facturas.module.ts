import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasFacturasPageRoutingModule } from './listas-facturas-routing.module';

import { ListasFacturasPage } from './listas-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasFacturasPageRoutingModule
  ],
  declarations: [ListasFacturasPage]
})
export class ListasFacturasPageModule {}
