import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  db_estudiantes: Estudiante[] = [];  

  st = new Estudiante(1003245581, "Juan", "Ramirez", 21);
  st2 = new Estudiante(1003245582, "Juan2", "Ramirez2", 22);
  st3 = new Estudiante(1003245583, "Juan3", "Ramirez3", 23);
  st4 = new Estudiante(1003245584, "Juan4", "Ramirez4", 24);
  st5 = new Estudiante(1003245585, "Juan5", "Ramirez5", 25);
  st6 = new Estudiante(1003245596, "Juan6", "Ramirez6", 26);
  st7 = new Estudiante(1003245597, "Juan7", "Ramirez7", 27);
  st8 = new Estudiante(1003245598, "Juan8", "Ramirez8", 28);
  st9 = new Estudiante(1003245599, "Juan9", "Ramirez9", 29);
  
  constructor() {    
    this.db_estudiantes.push(this.st);
    this.db_estudiantes.push(this.st2);
    this.db_estudiantes.push(this.st3);
    this.db_estudiantes.push(this.st4);
    this.db_estudiantes.push(this.st5);
    this.db_estudiantes.push(this.st6);
    this.db_estudiantes.push(this.st7);
    this.db_estudiantes.push(this.st8);
    this.db_estudiantes.push(this.st9);
  }
  

}

class Estudiante {
  public id = 0;
  public nombre: string = '';
  public apellido: string = '';
  public edad = 0;

  constructor (id: any, nombre: any, apellido: any, edad: any ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
  }
}