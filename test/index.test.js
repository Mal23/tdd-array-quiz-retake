const numberMuncher = require('../lib/index');

describe('numberMuncher function', () => {
  it('removes any numbers less than 5', () => {
    const input = [1, 3, 5, 7, 2];
    const expected = [1, 3, 2];
    const result = numberMuncher(input);

    expect(result).toEqual(expected);
  });
});
