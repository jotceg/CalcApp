import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

function check(string: string, type: string): boolean {
  if (string.charAt(string.length - 1) !== type) {
    return true;
  } else {
    return false;
  }
}

function invert(value: string): string {
  // tslint:disable-next-line:radix
  return (parseInt(value) * -1).toString();
}

function join(value: string, appendValue: string): string {
  value += appendValue;
  return value;
}

function clear(value: string): string {
  value = '';
  return value;
}

function del(value: string): string {
  value = value.substring(0, value.length - 1);
  return value;
}

function calculate(value: string): string {
  // tslint:disable-next-line:no-eval
  value = eval(value);
  return value.toString();
}

describe('Check if the user can type two character of the same (e.g "++")', () => {
  it('Should force user to type only one "+"', (done: DoneFn) => {
    expect(check('1', '+')).toBe(true, false);
    done();
  });
  it('Should force user to type only one "-"', (done: DoneFn) => {
    expect(check('1', '-')).toBe(true, false);
    done();
  });
  it('Should force user to type only one "*"', (done: DoneFn) => {
    expect(check('1', '*')).toBe(true, false);
    done();
  });
  it('Should force user to type only one "/"', (done: DoneFn) => {
    expect(check('1', '/')).toBe(true, false);
    done();
  });
  it('Should force user to type only one "."', (done: DoneFn) => {
    expect(check('1', '.')).toBe(true, false);
    done();
  });
});

describe('Check if inverting value works correctly', () => {
  it('Should invert positive value to negative value', (done: DoneFn) => {
    expect(invert('1')).toBe('-1', '1');
    done();
  });
  it ('Should invert negative value to positive value', (done: DoneFn) => {
    expect(invert('-1')).toBe('1', '-1');
    done();
  });
});

describe('Check if clearing number out works correctly', () => {
  it('Should clear out the number given as a string', (done: DoneFn) => {
    expect(clear('1')).toBe('', '1');
    done();
  });
  it ('Should not clear out the number given as a string', (done: DoneFn) => {
    expect(clear('')).toBe('');
    done();
  });
});

describe('Check if deleting the last number of whole string-based number works correctly', () => {
  it('Should delete the last number of string-based number', (done: DoneFn) => {
    expect(del('123')).toBe('12', '123');
    done();
  });
  it('Shouldn\'t delete the last number of string-based number', (done: DoneFn) => {
    expect(del('')).toBe('');
    done();
  });
});

describe('Check if joining numbers to whole string-based number works correctly', () => {
  it('Should join the "+" to the string-based number', (done: DoneFn) => {
    expect(join('1', '+')).toBe('1+', '1');
    done();
  });
  it('Should join the "-" to the string-based number', (done: DoneFn) => {
    expect(join('1', '-')).toBe('1-', '1');
    done();
  });
  it('Should join the "*" to the string-based number', (done: DoneFn) => {
    expect(join('1', '*')).toBe('1*', '1');
    done();
  });
  it('Should join the "/" to the string-based number', (done: DoneFn) => {
    expect(join('1', '/')).toBe('1/', '1');
    done();
  });
  it('Should join the "." to the string-based number', (done: DoneFn) => {
    expect(join('1', '.')).toBe('1.', '1');
    done();
  });
  it('Should join the "9" to the string-based number', (done: DoneFn) => {
    expect(join('1', '9')).toBe('19', '1');
    done();
  });
  it('Should join the "8" to the string-based number', (done: DoneFn) => {
    expect(join('1', '8')).toBe('18', '1');
    done();
  });
  it('Should join the "7" to the string-based number', (done: DoneFn) => {
    expect(join('1', '7')).toBe('17', '1');
    done();
  });
  it('Should join the "6" to the string-based number', (done: DoneFn) => {
    expect(join('1', '6')).toBe('16', '1');
    done();
  });
  it('Should join the "5" to the string-based number', (done: DoneFn) => {
    expect(join('1', '5')).toBe('15', '1');
    done();
  });
  it('Should join the "4" to the string-based number', (done: DoneFn) => {
    expect(join('1', '4')).toBe('14', '1');
    done();
  });
  it('Should join the "3" to the string-based number', (done: DoneFn) => {
    expect(join('1', '3')).toBe('13', '1');
    done();
  });
  it('Should join the "2" to the string-based number', (done: DoneFn) => {
    expect(join('1', '2')).toBe('12', '1');
    done();
  });
  it('Should join the "1" to the string-based number', (done: DoneFn) => {
    expect(join('1', '1')).toBe('11', '1');
    done();
  });
  it('Should join the "0" to the string-based number', (done: DoneFn) => {
    expect(join('1', '0')).toBe('10', '1');
    done();
  });
});

describe('Check if evaluating function works correctly', () => {
  it('Should evaluate the operation', (done: DoneFn) => {
    expect(calculate('1 + 2 + 3')).toBe('6', '1 + 2 + 3');
    done();
  });
});
