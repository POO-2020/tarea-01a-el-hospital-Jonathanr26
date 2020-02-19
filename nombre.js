export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
    }
    getApellidoNombre(){
        return `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
    }
    getIniciales(){
        let nombreInicial = this.nombre[0];
        let apellidoPaternoInicial = this.apellidoPaterno[0];
        let apellidoMaternoInicial = this.apellidoMaterno[0];

        return `${nombreInicial}.${apellidoPaternoInicial}.${apellidoMaternoInicial}`
    }
}
/*
let nombre1 = new Nombre ("Kenia ", "Villa ", "Serratos ");
console.log(nombre1.getNombreCompleto());
console.log(nombre1.getApellidoNombre());
console.log(nombre1.getIniciales());
*/
