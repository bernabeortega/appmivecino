import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproducto, RespuestaProductos } from 'src/app/interfaces/iProducto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  carrito = [];
  products = [];
  cntadorItems: BehaviorSubject<number>;
  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.cargarProductos();
  }

  abrirCarrito() {
    console.log('Abriendo carrito');
  }

  cargarProductos() {
    this.carritoService.obtenerProductos().subscribe(
      data=>{ this.products = data; },
    );
  }

  anadirCarrito(product: Iproducto) {
    console.log('Anadir carrito', product);
    product.cantidad = 1;
    //this.presentToast('Agregado al carro de compras');
    this.carritoService.agregarProducto(product);
  }

}
