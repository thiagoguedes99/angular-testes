import { Jogador2 } from './Jogador2';

describe('teste de event emitter -> ', () => {

  let jogador: Jogador2;

  beforeEach( () => {
    jogador = new Jogador2();
  });

  it('deve emittir evento quando muda o valor', () => {
    // const jogador = new Jogador();

    let novoVaor;

    const resp = jogador.powerChange.subscribe(valor => {
      novoVaor = valor
    });

    jogador.menosPower(10);

    expect(novoVaor).toEqual(90);
  });

  it('deve emittir evento quando muda o valor para 50', () => {
    // const jogador = new Jogador();

    let novoVaor;

    const resp = jogador.powerChange.subscribe(valor => {
      novoVaor = valor
    });

    jogador.menosPower(50);

    expect(novoVaor).toEqual(50);
  });
});
