import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { ApiPaisesService } from 'src/app/servicios/api-paises.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { SweetalertService } from 'src/app/servicios/sweetalert.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {

  // countries:any[]=[];
  paisSeleccion:any;

  actor:Actor = new Actor("","","","","");


  constructor(private firestore:FirestoreService, private sweetAlert:SweetalertService){
    
    
  }

  ngOnInit(){
    // this.api.getAllCountries().subscribe((data=>{
    //   this.countries = data;
    // }));
    
  }

  paisSeleccionado($event:any){
    this.paisSeleccion = $event;
    this.actor.pais = this.paisSeleccion;
  }

  guardarActor()
  {
    this.firestore.guardar(this.actor);
    this.sweetAlert.showSuccessAlert("Actor guardado exitoso!", "Exito", "success");
  }

}
