class Paciente{
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }
    getPerfil(){
        return `Nombre: ${this.nombre}, Fecha de nacimiento: ${this.fechaNacimiento}, Telefono: ${this.telefono}`
    }
}
let paciente1 = new Paciente(
    "Kenia Villa Serratos",
    "31/12/2000",
    3141618781
);
console.log(paciente1.getPerfil());