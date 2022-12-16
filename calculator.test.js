const add = require("./calculator");

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
