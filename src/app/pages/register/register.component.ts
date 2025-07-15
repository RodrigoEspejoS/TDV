import { Component, inject } from '@angular/core';
import { HomeLoginVistaComponent } from '../../components/home-login-vista/home-login-vista.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { AuthLoginService } from '../../services/authLogin.service';

@Component({
  selector: 'app-register',
  imports: [HomeLoginVistaComponent,FooterComponent,RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';

  private authLogin = inject(AuthLoginService);

  setEmailAndPassword(email: string, password: string): void {
      this.authLogin.email = email;
      this.authLogin.password = password;
  }


  private usuarioService = inject(UsuarioService);



  register(): void {
    const usuario = { 
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      contrasena_hash: this.password
    };

    this.usuarioService.createUsuario(usuario).subscribe({
      next: () => {
      window.location.href = '/';
      this.setEmailAndPassword(this.email, this.password);
      },
      error: (err) => {
      alert('Error en el registro: ' + err.message);
      }
    });
  }

}
