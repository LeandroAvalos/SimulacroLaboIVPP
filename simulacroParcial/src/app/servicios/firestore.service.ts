import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDoc, getDocs, updateDoc } from "@angular/fire/firestore";
import { Actor } from '../clases/actor';


@Injectable({
  providedIn: 'root'
})


export class FirestoreService {
  constructor(private firestore:Firestore) { }

  guardar(actor:Actor)
  {
    const col = collection(this.firestore, 'actores')
    return addDoc(col, {nombre: actor.nombre, apellido: actor.apellido, edad:actor.edad, foto:actor.foto, pais:actor.pais});
  }

}
