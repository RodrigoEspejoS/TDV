export interface Producto {
  id: number;
  nombre: string;
  modelo: string;
  talla: string;
  color: string;
  tipoMaterial: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagenUrl: string
  categoria:{
    nombreCategoria: string;
    descripcion: string;
  }
}