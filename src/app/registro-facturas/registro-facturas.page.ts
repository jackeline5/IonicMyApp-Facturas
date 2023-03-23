import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-facturas',
  templateUrl: './registro-facturas.page.html',
  styleUrls: ['./registro-facturas.page.scss'],
})
export class RegistroFacturasPage {
  
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  
    }

  constructor() { }

 
}
