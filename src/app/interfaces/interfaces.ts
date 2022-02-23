/* eslint-disable @typescript-eslint/naming-convention */
export interface RespuestaProductos {
  page: number;
  total_resultados: number;
  total_paginas: number;
  resultados: Producto[];
}

export interface Producto {
  codigo?: number;
  nombre?: string;
  descripcion?: string;
  stock?: number;
  cantidad?: number;
  precio_compra?: number;
  precio_venta?: number;
  fecha?: Date;
  id_categoria?: number;
  imagen?: string;
}
