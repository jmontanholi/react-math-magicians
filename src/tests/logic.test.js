import operate from '../logic/operate';

describe('operate', () => {
  test('adds two numbers', () => {
    const result = operate(2, 2, '+');

    expect(result).toBe('4');
    expect(result).not.toBe('5');
  });

  test('subtracts a number from a number', () => {
    const result = operate(10, 5, '-');

    expect(result).toBe('5');
  });

  describe('multiplies two numbers', () => {

    test('if positive', () => {
      const result = operate(10, 5, 'x');

      expect(result).toBe('50');
    });

    test('if negative', () => {
      const result = operate(10, -5, 'x');

      expect(result).toBe('-50');
    });
  });

  describe('divides two numbers', () => {

    test('if positive', () => {
      const result = operate(10, 5, '÷');

      expect(result).toBe('2');
    });

    test('if negative', () => {
      const result = operate(10, -5, '÷');

      expect(result).toBe('-2');
    });

    test('throws error when dividing by zero', () => {
      expect(() => operate(10, 0, '÷')).toThrow();
    });
  });

  test('returns the remainder of a division', () => {
    const result = operate(10, 5, '%');

    expect(result).toBe('0');
  });

  test('throws error when using an unknown operator', () => {
    expect(() => operate(10, 5, 'b')).toThrow('Unknown operation \'b\'');
  });
});
