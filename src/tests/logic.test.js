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

    test('Returns empty object if total value has a dot', () => {
      const object = {
        total: '.',
        next: '',
        operation: '',
      };

      const result = calculate(object, '.');

      expect(result).toStrictEqual({});
    });

    test('Returns total with a dot if total has no a decimal point', () => {
      const object = {
        total: '5',
        next: '',
        operation: '',
      };

      const result = calculate(object, '.');

      expect(result).toStrictEqual({ total: '5.' });
    });

    test('Returns total with 0 and a dot if total is empty', () => {
      const object = {
        total: '',
        next: '',
        operation: '',
      };

      const result = calculate(object, '.');

      expect(result).toStrictEqual({ total: '0.' });
    });
  });

  describe('Equal operator', () => {
    it('If you have valid key values return an object with the result', () => {
      const object = {
        total: '5',
        next: '5',
        operation: '+',
      };

      const result = calculate(object, '=');

      expect(result).toStrictEqual({ total: '10', next: null, operation: null });
    });

    it("If don't have valid key values return an empty object", () => {
      const object = {
        total: '',
        next: '',
        operation: '',
      };

      const result = calculate(object, '=');

      expect(result).toStrictEqual({});
    });
  });

  describe('Plus minus operator', () => {
    it('description', () => {
      const object = {
        total: '',
        next: '5',
        operation: '',
      };

      const result = calculate(object, '+/-');
      expect(result).toStrictEqual({ next: '-5' });
    });
  });
});
