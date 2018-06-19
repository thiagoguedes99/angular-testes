import { Routes } from '@angular/router';
import { HospitalComponent } from 'src/app/intermediario2/hospital/hospital.component';
import { MedicosComponent } from 'src/app/intermediario2/medicos/medicos.component';
import { IncrementadorComponent } from 'src/app/intermediario2/incrementador/incrementador.component';

export const ROTAS: Routes = [
  {path: 'hospital', component: HospitalComponent},
  {path: 'incrementador/:id', component: IncrementadorComponent},
  {path: '**', component: MedicosComponent},
];
