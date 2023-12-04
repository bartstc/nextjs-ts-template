import { sum } from './sum';

describe('sum', () => {
  it('should sum numbers', () => {
    expect(sum(2, 4)).toBe(6);
  });
});
