import { Component } from '@angular/core';
import { TablaJuegosComponent } from '../../components/tabla-juegos/tabla-juegos.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TablaJuegosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
