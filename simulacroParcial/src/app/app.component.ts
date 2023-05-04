import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiPaisesService } from './servicios/api-paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simulacroParcial';

  constructor(private api: ApiPaisesService){}

  ngOnInit(){
    
  }
}
