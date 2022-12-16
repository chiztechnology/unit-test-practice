const methods = require('./calculator');
const add = methods.add;
const subs = methods.subs;
const multiply = methods.multiply;
const divide = methods.divide;

describe('Test addition', ()=>{
  it('Test adding values', ()=>{
    expect(add(12,13)).toBe(25);
  });
  it('Test adding values', ()=>{
    expect(add(12,-1)).toBe(11);
  });
  it('Test adding values', ()=>{
    expect(add(2,23)).toBe(25);
  });
});


describe('Test a minus b', ()=>{
  it('Test a-b ', ()=>{
    expect(subs(12,13)).toBe(-1);
  });
  it('Test a-b', ()=>{
    expect(subs(12,12)).toBe(0);
  });
  it('Test a-b', ()=>{
    expect(subs(2,23)).toBe(-21);
  });
});

describe('Test multiply', ()=>{
  it('multiple test ', ()=>{
    expect(multiply(12,13)).toBe(156);
  });
  it('multiply test', ()=>{
    expect(multiply(12,12)).toBe(144);
  });
  it('multiply test', ()=>{
    expect(multiply(2,23)).toBe(46);
  });
});

describe('Test divide a/b', ()=>{
  it('Divide Test', ()=>{
    expect(divide(12,12)).toBe(1);
  });
  it('Divide Test', ()=>{
    expect(divide(12,2)).toBe(6);
  });
  it('Divide Test', ()=>{
    expect(divide(23,23)).toBe(1);
  });
});