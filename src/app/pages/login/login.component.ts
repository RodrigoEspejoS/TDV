import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HomeLoginVistaComponent } from '../../components/home-login-vista/home-login-vista.component';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { AuthLoginService } from '../../services/authLogin.service';

@Component({
  selector: 'app-login',
  imports: [HomeLoginVistaComponent,FooterComponent,RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  // Elimina las variables locales de email y password
  // Utiliza el servicio authLogin para almacenar email y password

  private authLogin = inject(AuthLoginService);

  get email(): string {
    return this.authLogin.email;
  }
  set email(value: string) {
    this.authLogin.email = value;
  }

  get password(): string {
    return this.authLogin.password;
  }
  set password(value: string) {
    this.authLogin.password = value;
  }

  usuario!: Usuario[];

  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  ngOnInit(): void {
    this.usuarioService.getAllUsuarios().subscribe((data) => {
      this.usuario = data;
    });
  }

  login(): void {
    const user = this.usuario.find(
      u => u.email === this.email && u.contrasena_hash === this.password
    );
    if (user) {
      this.router.navigate(['/']);
    } else {
      alert('Email o contraseña incorrectos');
    }
  }
}
