export class Pelicula {
    id?:number;
    nombre?:string;
    tipo?:string;
    fecha?:string;
    cantidadDePublico?:number;
    fotoDeLaPelicula?:string;

    constructor(id:number, nombre:string, tipo:string, fecha:string, cantidadDePublico:number, fotoDeLaPelicula:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fecha = fecha;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
    }

}
