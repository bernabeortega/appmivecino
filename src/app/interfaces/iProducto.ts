/* eslint-disable @typescript-eslint/naming-convention */
export interface Iproducto {
  codigo?: number;
  descripcion?: string;
  stock?: number;
  cantidad?: number;
  precio_compra?: number;
  precio_venta?: number;
  fecha?: Date;
  id_categoria?: number;
  imagenB64?: string;
}

export interface RespuestaProductos {
  items: Iproducto[];
}
