import Nombre from "./nombre.js";

export default class Doctor {
  /**
   *
   * @param {Nombre} doctor
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */

  constructor(doctor, especialidad, telefono, cedula) {
    this.doctor = doctor;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.cedula = cedula;
  }

  getPerfil() {
    return `Cedula:${this.cedula}, Especialidad:${this.especialidad}, 
Nombre:${this.doctor.getNombreCompleto()}, Telefeno:${this.telefono}`;
  }
}
/*
let doctor1 = new Doctor(
    "Dr. Profesor Patricio",
    "Pediatria",
    3121881999,
    9977478    
);

console.log(doctor1.getPerfil());
*/