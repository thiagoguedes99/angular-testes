import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosComponent } from './medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let component: MedicosComponent;
  let fixture: ComponentFixture<MedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosComponent ],
      providers: [MedicosService], // MedicosService
      imports: [HttpClientModule]
    })
    // .compileComponents();

    // ComponentFixture - integração com html e dom - navegação no DOM

    // pode ser assim :
    // fixture =  TestBed.createComponent(MedicosComponent);
    // component = fixture.componentInstance;
  }));

  beforeEach(() => {
    // ----- poder ser no beforeEach -------
    fixture = TestBed.createComponent(MedicosComponent); // cria e compila o componente
    component = fixture.componentInstance; // instacia o componente.
    // ----- poder ser no beforeEach -------


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the name', () => {
    expect(component.saludar('thiago')).toContain('thiago');
  });

  it('should return the fhase', () => {
    expect(component.saludar('thiago')).toEqual('hola thiago');
  });
});
