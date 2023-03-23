import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFacturasPageRoutingModule } from './registro-facturas-routing.module';

import { RegistroFacturasPage } from './registro-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFacturasPageRoutingModule
  ],
  declarations: [RegistroFacturasPage]
})
export class RegistroFacturasPageModule {}
