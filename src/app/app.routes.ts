import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './components/error404/error404.component';
import { DetalleJuegosComponent } from './components/detalle-juegos/detalle-juegos.component';
import { FiltroMinMaxComponent } from './components/filtro-min-max/filtro-min-max.component';
import { IdComponent } from './components/id/id.component';
import { SelectComponent } from './components/select/select.component';

export const routes: Routes = [
    {path: '',redirectTo:'home', pathMatch:'full'},

    {path:"home", component:HomeComponent},
    {path:"productos", component:ProductosComponent},
    {path:"contactos", component:ContactosComponent},
    { path: 'juegos-detalles/:idJuegos', component: DetalleJuegosComponent},
    {path:"productos/minmax", component:FiltroMinMaxComponent},
    {path:"productos/minmax/regresar", redirectTo:'productos'},
    {path:"productos/id", component:IdComponent},
    {path:"productos/id/regresar", redirectTo:'productos'},
    {path:"productos/categoria", component:SelectComponent},
    {path:"productos/categoria/regresar", redirectTo:'productos'},
    {path: '**', component: Error404Component}
];
