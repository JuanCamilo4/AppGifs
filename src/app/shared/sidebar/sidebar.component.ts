import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  title: string = "Aplicación de Gifs";

  get historial() {
    return this.gifsService.historial;
  }

  constructor( private gifsService: GifsService){}

  buscar( termino: string ){
    this.gifsService.buscarGifs(termino);
  }

}
