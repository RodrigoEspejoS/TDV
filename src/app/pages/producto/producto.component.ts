import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Producto } from '../../models/producto.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoSeleccionadoService } from '../../services/productoSeleccionado.service';


@Component({
  selector: 'app-producto',
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  selectedTalla: string = '';

  selectedProductoId!: number;

  productos!:Producto[];

  private productoService = inject(ProductService);
  private productoSelected = inject(ProductoSeleccionadoService);

  ngOnInit(): void {
    this.selectedProductoId = Number(this.productoSelected.productoId);
    this.productoService.getAllProducts().subscribe((data) => {
      this.productos = data;
    });
  }

  SeleccionarProducto(producto: Producto) {
    const productoEncontrado = this.productos.find(p => p.nombre === producto.nombre);
    if (productoEncontrado) {
      this.productoSelected.productoId = productoEncontrado.id;
      // Redirigir al detalle del producto seleccionado
      window.location.href = `/producto/${productoEncontrado.nombre}`;
    }
  }

}
