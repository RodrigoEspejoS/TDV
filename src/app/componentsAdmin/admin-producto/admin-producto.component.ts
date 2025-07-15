import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../models/producto.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import type { Modal } from 'bootstrap';


@Component({
  selector: 'app-admin-producto',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-producto.component.html',
  styleUrl: './admin-producto.component.css'
})
export class AdminProductoComponent implements OnInit {
  selectedCategoria: string = '';

  productos!: Producto[];
  nuevoProducto: Partial<Producto> = {
    categoria: {
      nombreCategoria: '',
      descripcion: ''
    }
  };

  private productoService = inject(ProductService);
  private router = inject(Router);

  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe((data) => {
      this.productos = data;
      this.updatePagination();
    });
  }

  //Logica para la creación de un nuevo producto
  crearProducto(): void {
    // Asegúrate de que el producto tenga todos los campos requeridos y un id numérico (puedes poner 0 o null si el backend lo asigna)
    const productoCompleto: Producto = {
      id: 0, // o null si tu modelo lo permite y el backend lo asigna
      nombre: this.nuevoProducto.nombre ?? '',
      modelo: this.nuevoProducto.modelo ?? '',
      talla: this.nuevoProducto.talla ?? '',
      color: '',
      tipoMaterial: this.nuevoProducto.tipoMaterial ?? '',
      descripcion: this.nuevoProducto.descripcion ?? '',
      precio: this.nuevoProducto.precio ?? 0,
      stock: this.nuevoProducto.stock ?? 0,
      imagenUrl: this.nuevoProducto.imagenUrl ?? '',
      categoria: {
        nombreCategoria: this.nuevoProducto.categoria?.nombreCategoria ?? 'Sin categoría',
        descripcion: this.nuevoProducto.categoria?.descripcion ?? 'Descripción no disponible'
      },
      // agrega aquí otros campos requeridos según tu modelo Producto
    };

    this.productoService.createProduct(productoCompleto).subscribe({
      next: (productoCreado) => {
        // Agrega el nuevo producto a la lista
        this.productos.push(productoCreado);
        // Limpia el formulario
        this.nuevoProducto = {
          categoria: {
            nombreCategoria: '',
            descripcion: ''
          }
        };
        const modalElement = document.getElementById('nuevoProductoModal');
        const bootstrap = (window as any).bootstrap;
        let modalInstance = null;
        if (modalElement && bootstrap && bootstrap.Modal) {
          modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (!modalInstance) {
            modalInstance = new bootstrap.Modal(modalElement);
          }
          modalInstance.hide();
          // Elimina cualquier backdrop huérfano
          setTimeout(() => {
            document.body.classList.remove('modal-open');
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(bd => bd.parentNode?.removeChild(bd));
          }, 300); // Espera a que termine la animación
        }
        window.location.reload();
        
      }
    });
  }

  //Logica para eliminar un producto
  eliminarProducto(producto: Producto): void {
    if (confirm(`¿Estás seguro de eliminar el producto "${producto.nombre}"?`)) {
      this.productoService.deleteProduct(producto.id).subscribe({
        next: () => {
          this.productos = this.productos.filter(p => p.id !== producto.id);
          this.updatePagination();
          
        }
        
      });
    }
    window.location.reload();
  }

currentPage = 1;
pageSize = 10;
totalPages = 1;
pages: number[] = [];

updatePagination() {
  this.totalPages = Math.ceil(this.productos.length / this.pageSize);
  this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
}

goToPage(page: number) {
  if (page < 1 || page > this.totalPages) return;
  this.currentPage = page;
}
}
