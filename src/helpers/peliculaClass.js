export class Pelicula{
    constructor(parametroNombre, parametroDesc, parametroGenero){
        this.nombre = parametroNombre;
        this.desc = parametroDesc;
        this.genero = parametroGenero;
    }

    //getters y setters
     get mostrarNombre() {
        return this.nombre;
     }

     get mostrarDesc() {
        return this.desc;
     }

     get mostrarGenero() {
        return this.genero;
     }

    

     set modificarNombre(nombre) {
        this.nombre = nombre;
     }

     set modificarDesc(desc) {
        this.desc = desc;
     }

     set modificarGenero(genero) {
        this.genero = genero;
     }
     

};