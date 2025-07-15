import { Component } from '@angular/core';
import { HomeLoginVistaComponent } from "../../components/home-login-vista/home-login-vista.component";
import { AdminProductoComponent } from "../../componentsAdmin/admin-producto/admin-producto.component";

@Component({
  selector: 'app-admin-panel',
  imports: [HomeLoginVistaComponent, AdminProductoComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  isVisibleAdminProductos = true;


  changeVisibilityAdminProductos() {
    this.isVisibleAdminProductos = !this.isVisibleAdminProductos;
  }

}
