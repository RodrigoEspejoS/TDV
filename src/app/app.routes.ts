import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CategoriaHombreComponent } from './pages/categoria-hombre/categoria-hombre.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { inject } from '@angular/core';
import { AuthLoginService } from './services/authLogin.service';
import { ProductService } from './services/product.service';

const adminGuard = () => {
    const auth = inject(AuthLoginService) as AuthLoginService;
    return auth.email === 'admin@admin.com';
};

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path: 'carrito', component: CarritoComponent},
    // Rutas para las categorías de productos
    {
        path: 'producto/{{nombreProducto}}',
        component: ProductoComponent,
    },
    {path: 'categoria/Hombre', component: CategoriaHombreComponent},
    // Ruta para el panel de administración con guard
    {
        path: 'panel-control',
        component: AdminPanelComponent,
        canActivate: [() => {
            const auth = inject(AuthLoginService) as AuthLoginService;
            if (auth.email === 'admin@admin.com') {
                return true;
            } else {
                window.location.href = '/';
                return false;
            }
        }]
    },
];
