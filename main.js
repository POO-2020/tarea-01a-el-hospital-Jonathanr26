import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from ".//cita.js";
import Hospital from "./hospital.js";

class Main{ 
    constructor(){
        this.hospital = new Hospital("Hospital", "Wigetta");
    }

    agregarDoctor() {
        let doctor1 = new Doctor(
          new Nombre("Guillermo", "Diaz", "Del Toro"),
          "Oftalmologia",
          3121991888,
          8888888);
        let doctor2 = new Doctor(
          new Nombre("Samuel", "De Luque", "Batuecas"),
          "Otorrinolaringologia",
          3127777777,
          777);
        this.hospital.registrarDoctor(doctor1);
        this.hospital.registrarDoctor(doctor2);
        this.hospital.listarDoctores();
    }
    agregarCita() {
        let cita1 = new Cita(
          new Fecha(29, 2, 2020),
          new Tiempo(6, 45, "PM"),
          new Doctor(new Nombre("Samuel", "De Luque", "Batuecas"),
            "Otorrinolaringologia",
            3127777777,
            777),
          new Paciente(
            new Nombre("Jonathan", "Rodriguez", "Villaseñor"),
            new Fecha(26, 10, 2000),
            3121691160)
        );
        this.hospital.registrarCita(cita1);
        this.hospital.listarCitas();
      }
}
let app = new Main();

app.agregarDoctor();
app.agregarCita();
