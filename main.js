import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"

class Main{ 
    constructor(){

    }

    probarDoctor(){
        let x = new Doctor(262626, "Pediatria", new Nombre("Guillermo", "Dias", "Del Toro"), 3121115954); 
        console.log(x.getPerfil());
    }
}
let app = new Main();
app.probarDoctor();
