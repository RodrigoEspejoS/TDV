import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-ubicacion',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {
  pages = 'default';
     view = false;
     view1 = false;
     view2 = false;
     view3 = false;
     view4 = false;
     view5 = false;
     view6 = false;

     changePageCuenta(){
      this.pages = 'cuenta';
     }
     changePageEnvio(){
      this.pages = 'envio';
     }
     changePageTiendas(){
      this.pages = 'tiendas';
     }
     changePageMedios(){
      this.pages = 'medios';
     }
     changePageDevolucion(){
      this.pages = 'devolucion';
     }
     changePagePedido(){
      this.pages = 'pedido';
     }
     changePageDefault(){
      this.pages = 'default';
     }

     changeView(){
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
     }
     changeView1(){
      this.view = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
     }
     changeView2(){
      this.view1 = false;
      this.view = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
     }
     changeView3(){
      this.view1 = false;
      this.view2 = false;
      this.view = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
     }
     changeView4(){
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view = false;
      this.view5 = false;
      this.view6 = false;
     }
     changeView5(){
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view = false;
      this.view6 = false;
     }
     changeView6(){
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view = false;
     }
     changeAllView(){
      this.view = false;
      this.view1 = false;
      this.view2 = false;
      this.view3 = false;
      this.view4 = false;
      this.view5 = false;
      this.view6 = false;
     }
}
