import Nombre from "./nombre.js"

export default class Doctor{
    /**
     * 
     * @param {number} cedula 
     * @param {string} especialidad 
     * @param {Nombre} nombre 
     * @param {number} telefono 
     */
    constructor(cedula, especialidad, nombre, telefono){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }
    getPerfil(){
        return (`Cedula: ${this.cedula}, Especialidad: ${this.especialidad}, 
        Nombre: ${this.nombre.getNombreCompleto()}, Telefono: ${this.telefono}`);
    }
}
/*
let doctor1 = new Doctor(
    9977478,
    "Pediatria",
    "Dr. Profesor Patricio",
    3121881999
);

console.log(doctor1.getPerfil());
*/