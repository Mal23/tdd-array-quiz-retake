describe('numberMuncher function', () => {
  it('removes any numbers less than 5', () => {
    const input = [1, 3, 5, 7, 2];
    const expected = [1, 3, 2];

    expect(numberMuncher(input)).toEqual(expected);
  });
});
