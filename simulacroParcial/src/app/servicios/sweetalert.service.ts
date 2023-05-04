import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class SweetalertService {

  constructor() { }

  showSuccessAlert(mensaje:string, titulo:string, icono:SweetAlertIcon) {
    Swal.fire(titulo, mensaje, icono);
  }
}
