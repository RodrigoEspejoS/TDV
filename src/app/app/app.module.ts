import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [UsuarioService,ProductService],
})
export class AppModule { }
