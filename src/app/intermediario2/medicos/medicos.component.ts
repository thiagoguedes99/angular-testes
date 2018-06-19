import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: any[] = [];

  constructor(public medicosService: MedicosService) { }

  ngOnInit() {
  }

  saludar(name: string) {
    return `hola ${name}`;
  }

  obterMedicos() {
    this.medicosService.getMedicos().subscribe((resp: any []) => {
      this.medicos = resp;
    })
  }

}
