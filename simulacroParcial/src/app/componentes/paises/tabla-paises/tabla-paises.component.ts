import { Component, EventEmitter, Output } from '@angular/core';
import { ApiPaisesService } from 'src/app/servicios/api-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  countries:any[]=[];
  @Output() paises:EventEmitter<any> = new EventEmitter<any>();

  constructor(private api:ApiPaisesService){

  }

  ngOnInit(){
    this.api.getAllCountries().subscribe((data=>{
      this.countries = data;
    }));
    
  }

  obtenerPaises(pais:any)
  {
    this.paises.emit(pais);
  }
}
