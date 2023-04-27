import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  @Input() listaPeliculasRecibida?:Pelicula[];
  @Output() detallesPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  constructor(){}

  obtenerPelicula(pelicula:Pelicula)
  {
    this.detallesPelicula.emit(pelicula);
  }

}
