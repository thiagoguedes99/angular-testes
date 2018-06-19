import { Jogador } from './classes';

describe('teste de classe -> ', () => {

  let jogador;

  beforeEach( () => {
    jogador = new Jogador();
  });

  it('deve retonar 80', () => {
    // const jogador = new Jogador();

    const resp = jogador.menosPower(20);

    expect(resp).toEqual(80);
  });

  it('deve retonar 50', () => {
    // const jogador = new Jogador();

    const resp = jogador.menosPower(50);

    expect(resp).toEqual(50);
  });

  it('deve retonar 0', () => {
    // const jogador = new Jogador();

    const resp = jogador.menosPower(300);

    expect(resp).toEqual(0);
  });
});
