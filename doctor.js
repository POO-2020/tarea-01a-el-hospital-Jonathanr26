class Doctor{
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }
    getPerfil(){
        return (`Nombre: ${this.nombre}, Especialidad: ${this.especialidad}, Telefono: ${this.telefono}, Cedula: ${this.cedula}`);
    }
}
let doctor1 = new Doctor(
    "Dr. Profesor Patricio",
    "Pediatria",
    3121881999,
    9977478
);

console.log(doctor1.getPerfil());