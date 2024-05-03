import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
categoria =""

productos =[
  {
    id: "vd1",
    nombre: "World of Warcraft",
    precio: 450,
    categoria: "moba",
    url: "https://w7.pngwing.com/pngs/717/552/png-transparent-world-of-warcraft-warcraft-orcs-humans-warcraft-ii-tides-of-darkness-video-game-world-of-warcraft-game-warlord-warcraft-thumbnail.png"

  },
  {
    id: "vd2",
    nombre: "League of Legends",
    precio: 320,
    categoria: "moba",
    url: "https://e7.pngegg.com/pngimages/98/647/png-clipart-league-of-legends-esports-logo-font-game-league-of-legends-2018-game-text.png"
  },
  {
    id: "vd3",
    nombre: "Tomb Raider",
    precio: 125,
    categoria: "aventura",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXTZzjdEA6y5f1ei77PkVhJHvbx40dA6epw&usqp=CAU"
  },
  {
    id: "vd4",
    nombre: "Call of Duty",
    precio: 80,
    categoria: "shooter",
    url: "https://w7.pngwing.com/pngs/184/635/png-transparent-call-of-duty-advanced-warfare-call-of-duty-modern-warfare-3-playstation-4-playstation-3-call-of-duty-video-game-playstation-4-call-of-duty.png"
  }
]



visualizar: any
ver( id: any){
  this.visualizar = id
}
}
