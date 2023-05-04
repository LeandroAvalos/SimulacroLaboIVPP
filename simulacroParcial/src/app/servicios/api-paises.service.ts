import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPaisesService {

  private api = 'https://restcountries.com/v3.1/all';
  constructor(private http: HttpClient) 
  { 
    
  }

  getAllCountries():Observable<any>{
    return this.http.get<any>(this.api);
  }
}
