import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {number} telefono 
     */
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }
    getPerfil(){
        return `Nombre: ${this.nombre.getNombreCompleto()}, 
Fecha de nacimiento: ${this.fechaNacimiento.getFecha()}, 
Telefono: ${this.telefono}`
    }
}
/*
let paciente1 = new Paciente(
    new Nombre("Kenia", "Villa", "Serratos"),
    new Fecha(31,12,2000),
    3141618781
);
console.log(paciente1.getPerfil());
*/
