import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './page/busqueda/busqueda.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';

const routes: Routes = [
  {
    path:'', component:BusquedaComponent
  },
  {
    path:'actorAlta', component:ActorAltaComponent
  },
  {
    path:'busqueda',component:BusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
