/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CarritoService {

  carrito = [];
  carritoNumeroItems = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  obtenerCarrito() {
    return this.carrito;
  }

  obtenerCarritoNumeroItems() {
    return this.carritoNumeroItems;
  }

  bajarCantidadProducto(product) {
    for (const [index, p] of this.carrito.entries()) {
      if (p.id === product.id) {
        p.cantidad -= 1;
        if (p.cantidad === 0) {
          this.carrito.splice(index, 1);
        }
      }
    }
    this.carritoNumeroItems.next(this.carritoNumeroItems.value - 1);
  }

  eliminarProducto(product) {
    for (const [index, p] of this.carrito.entries()) {
      if (p.id === product.id) {
        this.carritoNumeroItems.next(
          this.carritoNumeroItems.value - p.cantidad
        );
        this.carrito.splice(index, 1);
      }
    }
  }

  // obtenerCategorias() {
  //   return this.http.get<RespuestaCategorias>(environment.apiUrl);
  // }

  obtenerProductos() {
    //return this.http.get<RespuestaProductos>(environment.apiUrl);
    //return this.data;
    return this.http
      .get('assets/json/ropa.json')
      .pipe(
        map((res: any) => res.data)
      );
  }

  agregarProducto(producto) {
    console.log(producto);
    let agregado = false;
    for (const p of this.carrito) {
      if (p.id === producto.id) {
        p.cantidad += 1;
        agregado = true;
        break;
      }
      if (!agregado) {
        this.carrito.push(producto);
      }
      this.carritoNumeroItems.next(this.carritoNumeroItems.value + 1);
    }
  }
}
