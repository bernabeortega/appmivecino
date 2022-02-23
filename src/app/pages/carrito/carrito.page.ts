import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Iproducto } from 'src/app/interfaces/iProducto';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: Iproducto[] = [];

  constructor(
    private carritoService: CarritoService,
    private modalCtrl: ModalController,
    private alertCtr: AlertController
  ) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  bajarItemCarrito(product) {
    //this.carrito.bajarCantidadProducto(product);
  }

  aumentarItemCarrito(product) {
    this.carritoService.agregarProducto(product);
  }

  removerItemCarrito(product) {
    this.carritoService.eliminarProducto(product);
  }

  obtenerTotal() {
    return this.carrito.reduce((i, j) => i + j.precio_venta * j.cantidad, 0);
  }

  async checkout() {
    const alert = await this.alertCtr.create({
      header: 'Gracias por su compra',
      message: 'Por favor revise los detalles en su correo',
      buttons: ['OK'],
    });

    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
