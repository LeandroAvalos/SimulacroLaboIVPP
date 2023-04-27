import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

 listaPeliculas?:Pelicula[];
 estado = 'tabla';
 peliculaParaMostrar: Pelicula = {};

 constructor(){
  this.listaPeliculas = [
    {
      id: 1,
      nombre: 'Duro de matar',
      tipo: 'Accion',
      fecha: '2022-05-12',
      cantidadDePublico: 5,
      fotoDeLaPelicula: '../../../assets/perfil.png'
    },
    {
      id: 2,
      nombre: 'Rapido y fogoso',
      tipo: 'Carreras',
      fecha: '2022-06-13',
      cantidadDePublico: 10,
      fotoDeLaPelicula: '../../../assets/perfil.png'
    },
    {
      id: 3,
      nombre: 'X-men',
      tipo: 'Sy-Fy',
      fecha: '2022-07-14',
      cantidadDePublico: 15,
      fotoDeLaPelicula: '../../../assets/perfil.png'
    }
  ]
 }

 cambiarEstado(){
  this.estado = this.estado == 'tabla' ? 'listado': 'tabla';
 }

 detallesPelicula($event:any)
  {
    this.peliculaParaMostrar = $event;
  }

}
