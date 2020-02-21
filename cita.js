import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";

export default class Cita {
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */

  constructor(fecha, hora, doctor, paciente) {
    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;
  }

  getPerfil() {
    return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, 
Dr.${this.doctor.doctor.apellidoPaterno}, ${this.paciente.nombre.getNombreCompleto()}`;
  }
}
/*
let cita1 = new Cita(
    new Fecha(29, 2, 2020), new Tiempo(5, 23, "PM"), new Doctor(new Nombre("Guillermo", "Dias", "Del Toro")), new Paciente(new Nombre("Samuel", "Espinosa", "Villaseñor"))
);
console.log(cita1.getCita());
*/
