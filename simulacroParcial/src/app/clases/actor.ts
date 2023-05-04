export class Actor {

    nombre?:string;
    apellido?:string;
    edad?:string;
    foto?:string;
    pais?:string;

    constructor(nombre:string, apellido:string, edad:string, foto:string, pais:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.foto = foto;
        this.pais = pais;
    }
}
