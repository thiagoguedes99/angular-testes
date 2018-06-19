import { incrementar } from './number';

describe('teste number ->', () => {

  it('should return 100', () => {
    const number = incrementar(300)

    expect(number).toEqual(100);
  });

  it('should return 81', () => {
    const number = incrementar(80)

    expect(number).toEqual(81);
  });
});
