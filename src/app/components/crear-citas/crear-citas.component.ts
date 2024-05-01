import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrl: './crear-citas.component.css'
})
export class CrearCitasComponent {
  nombre: string = "";
  fecha : string = "";
  hora:string = "";
  sintomas : string= "";
  formularioIncorrecto : boolean = false;
  @Output() nuevaCita = new EventEmitter<any>();
  
  constructor()
  {

  }
  agregarCita()
  {
    if(this.nombre == ''|| this.fecha == '' || this.hora == '' || this.sintomas == '')
    {
      this.formularioIncorrecto = true;
      return ;
    }
    this.formularioIncorrecto = false;
    const  CITA =
    {
      nombre :this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log('soy hijo');
    this.nuevaCita.emit(CITA);
    this.resetCampos();
   
  }
  resetCampos()
  {
    this.nombre ='';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
    
  }

}
