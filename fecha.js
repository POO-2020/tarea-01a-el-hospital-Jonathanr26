class Fecha{
    
    constructor(dia, mes, año){ 
        this.fecha = new Date(año, mes-1, dia);
        this.diaSemana = [
            "Domingo", 
            "Lunes", 
            "Martes", 
            "Miercoles", 
            "Jueves", 
            "Viernes", 
            "Sabado"];
        this.mesAño = [
            "Enero", 
            "Febrero", 
            "Marzo", 
            "Abril", 
            "Mayo", 
            "Junio", 
            "Julio", 
            "Agosto", 
            "Septiembre", 
            "Octubre", 
            "Noviembre", 
            "Diciembre"];
    }
    getAños(){

    }
}