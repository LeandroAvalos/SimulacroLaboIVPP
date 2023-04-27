import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent {
  @Input() listaPeliculasRecibida?:any[];
  @Output() detallesPelicula:EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  obtenerPelicula(pelicula:Pelicula)
  {
    this.detallesPelicula.emit(pelicula);
  }
}
