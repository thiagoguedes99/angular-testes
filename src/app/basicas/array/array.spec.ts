import { robos } from './array';

describe('teste array ->', () => {

  it('deve contar a quantidade de robos', () => {
    expect(robos().length).toBe(3);
  });

  it('deve ter a quantidade de robos maior ou igual a 2', () => {
    expect(robos().length).toBeGreaterThanOrEqual(2);
  });

  it('deve conter robo1 e robo3', () => {
    expect(robos()).toContain('robo1');
    expect(robos()).toContain('robo3');
  });
});
