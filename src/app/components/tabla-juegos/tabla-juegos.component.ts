import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-tabla-juegos',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './tabla-juegos.component.html',
  styleUrl: './tabla-juegos.component.css'
})
export class TablaJuegosComponent {
  Preciomin = 0
  Preciomax = 500
  idBusqueda: string="";
  juegoEncontrado: any;

  productos =[
    {
      id: "vd1",
      nombre: "World of Warcraft",
      precio: 450,
      url: "https://w7.pngwing.com/pngs/717/552/png-transparent-world-of-warcraft-warcraft-orcs-humans-warcraft-ii-tides-of-darkness-video-game-world-of-warcraft-game-warlord-warcraft-thumbnail.png"
  
    },
    {
      id: "vd2",
      nombre: "League of Legends",
      precio: 320,
      url: "https://e7.pngegg.com/pngimages/98/647/png-clipart-league-of-legends-esports-logo-font-game-league-of-legends-2018-game-text.png"
    },
    {
      id: "vd3",
      nombre: "Tomb Raider",
      precio: 125,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXTZzjdEA6y5f1ei77PkVhJHvbx40dA6epw&usqp=CAU"
    },
    {
      id: "vd4",
      nombre: "Call of Duty",
      precio: 80,
      url: "https://w7.pngwing.com/pngs/184/635/png-transparent-call-of-duty-advanced-warfare-call-of-duty-modern-warfare-3-playstation-4-playstation-3-call-of-duty-video-game-playstation-4-call-of-duty.png"
    }
  ]

  

  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  buscarJuego() {
    this.juegoEncontrado = this.productos.find(juego => juego.id === this.idBusqueda);
    if (!this.juegoEncontrado) {
      alert('El videojuego con el ID ingresado no fue encontrado.');
  }
}
}
