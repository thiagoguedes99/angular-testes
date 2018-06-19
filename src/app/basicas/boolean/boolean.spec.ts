import { logado, logado2 } from './boolean';

describe('teste booleano ->', () => {

  it('deve retornar true', () => {
    expect(logado()).toBeTruthy();

    // ou

    const resp = logado();

    expect(resp).toBeTruthy()
  });

  it('deve retornar false', () => {
    expect(logado()).toBeTruthy();

    // ou

    const resp = logado2();

    expect(resp).toBeFalsy()
  });
});
