import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-myproyecto',
  templateUrl: './myproyecto.component.html',
  styleUrls: ['./myproyecto.component.css']
})
export class MyproyectoComponent implements OnInit {

//vector para los pacientes
pacientes: any=[];
show: boolean = false;

  constructor(public miPacienteService: JsonService) {
    
    
   }

   ngOnInit(): void {
     this.verPaciente();
  }

   //crear un metodos para ver los pacientes 

  verPaciente(){
    return this.miPacienteService.getpacientes().subscribe((data:{})=>{
      this.pacientes=data
    })
    
  }
  

}
