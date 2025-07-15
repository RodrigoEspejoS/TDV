import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeLoginVistaComponent } from '../home-login-vista/home-login-vista.component';
import { AuthLoginService } from '../../services/authLogin.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isVisibleHomeLogin = false;

  isVisibleUsuarioLogeado = false;

  isVisibleAdminLogeado = false;

  public authLogin = inject(AuthLoginService);

  public usuarioService = inject(UsuarioService);

  usuario!: Usuario[];

  usuarioLogeado!: Usuario;

  ngOnInit(): void {
    // Inicializar el estado de visibilidad
    this.isVisibleHomeLogin = false;
    this.isVisibleUsuarioLogeado = false;
    this.isVisibleAdminLogeado = false;

    // Verificar si el usuario está logueado
    if (this.authLogin.email?.length > 0 && this.authLogin.password?.length > 0) {
      this.usuarioService.getAllUsuarios().subscribe((data) => {
        this.usuario = data;
        // Obtener el usuario cuyo email coincide con el de authLogin
        const usuarioLogeado = data.find(u => u.email === this.authLogin.email);
        if (usuarioLogeado) {
          // Puedes guardar el usuario logeado en una variable si lo necesitas
          this.usuarioLogeado = usuarioLogeado;
        }
      });
    }
  }

  constructor() {
  }

  CerrarSesion() {
    this.authLogin.email = '';
    this.authLogin.password = '';
    this.isVisibleUsuarioLogeado = false;
    this.isVisibleHomeLogin = false;
    this.isVisibleAdminLogeado = false;
  }

  changeVisibilityUsuarioLogeado() {
    this.isVisibleUsuarioLogeado = !this.isVisibleUsuarioLogeado;
  }

  changeVisibilityAdminLogeado() {
    this.isVisibleAdminLogeado = !this.isVisibleAdminLogeado;
  }

  changeVisibilityHomeLogin(){
    this.isVisibleHomeLogin = !this.isVisibleHomeLogin;
  }
}
