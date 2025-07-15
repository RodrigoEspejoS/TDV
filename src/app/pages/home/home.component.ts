import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { Banner01Component } from '../../components/banner01/banner01.component';
import { BannerNosotrosComponent } from '../../components/banner-nosotros/banner-nosotros.component';
import { ClientesComponent } from '../../components/clientes/clientes.component';
import { BannerVerMasComponent } from '../../components/banner-ver-mas/banner-ver-mas.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';
import { ProductService } from '../../services/product.service';
import { AuthLoginService } from '../../services/authLogin.service';
import { ProductoSeleccionadoService } from '../../services/productoSeleccionado.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BannerComponent,Banner01Component,BannerNosotrosComponent,ClientesComponent,BannerVerMasComponent,FooterComponent,RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
 productos!:Producto[];

  private productoService = inject(ProductService);
  
  private authLogin = inject(AuthLoginService);

  get email(): string {
    return this.authLogin.email;
  }

  get password(): string {
    return this.authLogin.password;
  }

  private productoSelected = inject(ProductoSeleccionadoService);

  SeleccionarProducto(producto: Producto){
    const productoEncontrado = this.productos.find(p => p.nombre === producto.nombre);
    if (productoEncontrado) {
      this.productoSelected.productoId = productoEncontrado.id;
    }
  }

  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe((data) => {
      this.productos = data;
    });
  }

  
}
