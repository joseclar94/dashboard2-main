import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  opcionSeleccionado: string  = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
