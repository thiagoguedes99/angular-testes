import { FormComponent } from './form';
import { FormBuilder } from '@angular/forms';


describe('formulário ->', () => {

  let componente: FormComponent;

  beforeEach( () => {
    componente = new FormComponent( new FormBuilder );
  });

  it('deve ter os dois campso no formulário email password', () => {

    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('deve ter email obrigatório', () => {

    const controle = componente.form.get('email');

    controle.setValue('');
    expect( controle.valid).toBeFalsy();
  });

  it('deve ter email válido', () => {

    const controle = componente.form.get('email');

    controle.setValue('thiago@homt.com');

    expect( controle.valid ).toBeTruthy();
  });

  it('deve ter email invalido', () => {

    const controle = componente.form.get('email');

    controle.setValue('thiago@');
    expect( controle.valid).toBeFalsy();
  });
});
