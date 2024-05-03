import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-detalle-juegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-juegos.component.html',
  styleUrl: './detalle-juegos.component.css'
})
export class DetalleJuegosComponent {
  ruta = inject(ActivatedRoute);
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

  juego: any;
  id: any;
  
  ngOnInit() {
    this.ruta.params.subscribe(p => {
      console.log(p['idJuegos']);
      this.id = p['idJuegos'];

      this.juego = this.productos.find(element => element.id === this.id);
      console.log(this.juego);
    });
  }

  mensaje() {
    alert("juegos");
  }
}
