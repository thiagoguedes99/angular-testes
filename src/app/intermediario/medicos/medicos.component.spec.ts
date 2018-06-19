import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  let _medicoService: MedicosService = new MedicosService(null);

  beforeEach( () => {
    componente = new MedicosComponent(_medicoService);
  });

  it('deve buscar o array de médicos', () => {

    const medico = ['medico1', 'medico2', 'medico3'];

    spyOn( _medicoService, 'getMedicos' ).and.callFake( () => {
      return Observable.from([medico]) // instalação do rxjs-compat
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toEqual(3);
  });

  it('deve chamar a função', () => {
    const medico = { nombre: 'Médico Juan Carlos' };

    const spy = spyOn( _medicoService, 'agregarMedico' ).and.callFake( () => {
      return Observable.empty() // instalação do rxjs-compat
    });

    componente.agregarMedico();

    expect(spy).toHaveBeenCalled(); // sendo chamado somente
    expect(spy).toHaveBeenCalledWith(medico); // sendo chamado recebendo o argumento
  });

  it('deve conter o medico salvo', () => {

    const medico = {
      _id: 1,
      nome: 'thiago'
    };

    spyOn( _medicoService, 'agregarMedico' ).and.returnValue(
      Observable.from([medico])
    );

    componente.agregarMedico();

    expect(componente.medicos.includes(medico)).toBeTruthy();
  });

  it('deve tratar o erro do serviço', () => {

    const message = 'deu erro no resquest';

    spyOn( _medicoService, 'agregarMedico' ).and.returnValue(
      Observable.throw(message)
    );

    componente.agregarMedico();

    expect(componente.mensajeError).toEqual(message);
  });

  it('deve chamar o delete médico passando paramentro', () => {

    spyOn(window, 'confirm').and.returnValue(true); // faz o fake do alert do browser.

    const spy = spyOn( _medicoService, 'borrarMedico' ).and.returnValue(
      Observable.empty()
    );

    componente.borrarMedico('1');

    expect(spy).toHaveBeenCalledWith('1');
  });

  it('NÃO deve chamar o delete médico passando paramentro', () => {

    spyOn(window, 'confirm').and.returnValue(false); // faz o fake do alert do browser.

    const spy = spyOn( _medicoService, 'borrarMedico' ).and.returnValue(
      Observable.empty()
    );

    componente.borrarMedico('1');

    expect(spy).not.toHaveBeenCalledWith('1');
  });




});
