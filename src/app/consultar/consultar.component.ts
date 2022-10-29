import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  Estudiantes: any[] = [];
  cedula = '';
  EstudiantesFilter: any[] = [];

  constructor(estudiantesService: EstudiantesService) { 
    this.Estudiantes = estudiantesService.db_estudiantes;
    this.EstudiantesFilter = this.Estudiantes;
  }

  ngOnInit(): void {
  }  

  onKey(event: any) {
    this.EstudiantesFilter = this.Estudiantes.filter((value) =>  {
      if (String(value.id).includes(event.target.value))
        return value;
      
      //if (String(value.id) == event.target.value)
        //return value;
    })

    if (event.target.value == "") {
      this.EstudiantesFilter = this.Estudiantes;
    }

  }


}
