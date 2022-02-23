import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/interfaces';
import { RopaService } from 'src/app/services/ropa.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  ropaReciente: Producto[] = [];
  ropaPopular: Producto[] = [];

  constructor(private ropaService: RopaService) { }

  ngOnInit() {
    this.ropaService.
      getProductos()
      .subscribe(resp => {
        this.ropaReciente = resp.resultados;
      });
    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.ropaService.
      getPopulares()
      .subscribe(resp => {
        const arrTemp = [...this.ropaPopular, ...resp.resultados];
        this.ropaPopular = arrTemp;
      });
  }

}
