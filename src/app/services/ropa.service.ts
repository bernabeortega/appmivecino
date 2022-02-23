import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto, RespuestaProductos } from '../interfaces/interfaces';

const apiURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  // private PopularesPages = 0;

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<RespuestaProductos>(`${apiURL}productos.json`);
  }

  getPopulares() {
    // this.PopularesPages++;
    return this.http.get<RespuestaProductos>(`${apiURL}productos.json`); //this.PopularPages
  }

  getRopaDetalle(id: number) {
    return this.http.get<Producto>(`${apiURL}productos.json`);
  }
}
