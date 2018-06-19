// sempre tem "describe e it()"

// describe = agrupa um grupo de testes.
// it = é um teste. teste expecífico.

// describe('teste de string');

// it('deve ter um nome')

import { mensage } from './string'

describe('teste de string ->', () => {

  it('deve retornar um string', () => {
    const resp = mensage('thiago')

    expect(typeof resp).toEqual('string')
  });

  it('deve retonar um helo com o nome', () => {
    const resp = mensage('thiago')

    expect(resp).toEqual('hello thiago')
  });

  it('deve retonar uma string contendo o nome thiago', () => {
    const resp = mensage('thiago')

    expect(resp).toContain('thiago')
  });
});
