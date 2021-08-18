import operate from '../logic/operate';
import calculate from '../logic/calculate';

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

describe('Calculate', () => {
  test('Returns an state with empty key values', () => {
    const object = {
      total: '123',
      next: '5',
      operation: '+',
    };

    const result = calculate(object, 'AC');

    expect(result).toStrictEqual({ total: '', next: '', operation: '' });
  });

  test('Returns next + buttonName if we have an operation and next value', () => {
    const object = {
      total: '',
      next: '5',
      operation: '+',
    };

    const result = calculate(object, '5');

    expect(result).toStrictEqual({ next: '55' });
  });

  test('Returns next as buttonName if we do not have next but have operation', () => {
    const object = {
      total: '',
      next: '',
      operation: '+',
    };

    const result = calculate(object, '5');

    expect(result).toStrictEqual({ next: '5' });
  });

  test('Returns next + buttonName when we do not have an operation', () => {
    const object = {
      total: '',
      next: '5',
      operation: '',
    };

    const result = calculate(object, '5');

    expect(result).toStrictEqual({ total: null, next: '55' });
  });

  test('Returns next as buttonName when we do not have an operation', () => {
    const object = {
      total: '',
      next: '',
      operation: '',
    };

    const result = calculate(object, '5');

    expect(result).toStrictEqual({ total: null, next: '5' });
  });

  describe('Dot button', () => {
    test('Return empty object if number already has a dot', () => {
      const object = {
        total: '',
        next: '0.5',
        operation: '',
      };

      const result = calculate(object, '.');

      expect(result).toStrictEqual({});
    });

    test('Return empty object if number already has a dot', () => {
      const object = {
        total: '',
        next: '0',
        operation: '',
      };

      const result = calculate(object, '.');

      expect(result).toStrictEqual({ next: '0.' });
    });

    test('Returns 0. if we have an operation but no next value', () => {
      const object = {
        total: '',
        next: '',
        operation: '+',
      };

      const result = calculate(object, '.');

      expect(result).toStrictEqual({ next: '0.' });
    });
  });
});
