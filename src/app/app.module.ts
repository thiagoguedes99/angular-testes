import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediario/medicos/medicos.component';
import { MedicosService } from './intermediario/medicos/medicos.service';
import { HospitalComponent } from './intermediario2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediario2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { ROTAS } from 'src/app/avancado/rotas/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROTAS)
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
