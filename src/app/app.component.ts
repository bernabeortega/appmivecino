import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Productos', url: '/carrito', icon: 'mail' },

    { title: 'Pedidos', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Escanear codigo', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Asesoramiento', url: '/folder/Archived', icon: 'archive' },
    { title: 'Foro', url: '/folder/Trash', icon: 'trash' },
    { title: 'Perfil', url: '/folder/Spam', icon: 'warning' },
    { title: 'Direcciones', url: '/folder/Spam', icon: 'warning' },
    { title: 'Login/Logout', url: '/folder/Spam', icon: 'warning' },
  ];

  constructor() {}

  ngOnInit() {
  }
}
